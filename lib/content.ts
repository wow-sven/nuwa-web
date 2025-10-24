import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

import { formatDate } from "./utils";

export interface PostFrontmatter {
  title: string;
  excerpt?: string;
  publishDate: string;
  image?: string;
  category: string;
  author: string;
  tags?: string[];
  draft?: boolean;
}

export interface PostSummary {
  slug: string;
  data: PostFrontmatter;
  coverImage?: string;
  readingTimeMinutes: number;
  formattedDate: string;
}

export interface PostDetail extends PostSummary {
  html: string;
  content: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const PUBLIC_POSTS_DIR = path.join(process.cwd(), "public", "posts");

function ensureDirExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function ensureAssetCopied(slug: string, assetFile: string) {
  const source = path.join(POSTS_DIR, slug, assetFile);
  if (!fs.existsSync(source)) return;

  ensureDirExists(path.join(PUBLIC_POSTS_DIR, slug));

  const destination = path.join(PUBLIC_POSTS_DIR, slug, assetFile);
  if (
    fs.existsSync(destination) &&
    fs.statSync(destination).mtimeMs >= fs.statSync(source).mtimeMs
  ) {
    return;
  }

  fs.copyFileSync(source, destination);
}

function normalizeImagePath(image?: unknown): string | undefined {
  if (!image || typeof image !== "string") return undefined;
  return image.replace(/^\.?\//, "");
}

function parseFrontmatter(slug: string) {
  const postDir = path.join(POSTS_DIR, slug);
  const filePath = path.join(postDir, "index.md");

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post ${slug} is missing index.md`);
  }

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  const frontmatter: PostFrontmatter = {
    title: data.title ?? "Untitled",
    excerpt: data.excerpt ?? "",
    publishDate: data.publishDate ?? new Date().toISOString(),
    image: data.image,
    category: data.category ?? "uncategorized",
    author: data.author ?? "unknown",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
  };

  const image = normalizeImagePath(frontmatter.image);
  if (image) {
    ensureAssetCopied(slug, image);
  }

  const reading = readingTime(content);

  const summary: PostSummary = {
    slug,
    data: frontmatter,
    coverImage: image ? `/posts/${slug}/${image}` : undefined,
    readingTimeMinutes: Math.max(1, Math.round(reading.minutes)),
    formattedDate: formatDate(frontmatter.publishDate),
  };

  return { summary, content };
}

export function getAllPosts(): PostSummary[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const slugs = fs
    .readdirSync(POSTS_DIR)
    .filter((entry) =>
      fs.statSync(path.join(POSTS_DIR, entry)).isDirectory()
    );

  return slugs
    .map((slug) => parseFrontmatter(slug).summary)
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime()
    );
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export async function getPostBySlug(
  slug: string
): Promise<PostDetail | null> {
  try {
    const { summary, content } = parseFrontmatter(slug);

    if (summary.data.draft) {
      return null;
    }

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);

    return {
      ...summary,
      content,
      html: processedContent.toString(),
    };
  } catch (error) {
    return null;
  }
}

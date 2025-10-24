import Container from "@/components/container";
import PageTitle from "@/components/page-title";
import PostCard from "@/components/post-card";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Archive",
  description: "See all posts we have ever written.",
};

export default function ArchivePage() {
  const posts = getAllPosts();

  return (
    <Container>
      <PageTitle
        title="Archive"
        description="See all posts we have ever written."
      />

      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} aspect="square" />
        ))}
      </div>
    </Container>
  );
}

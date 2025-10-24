import Container from "@/components/container";
import PostCard from "@/components/post-card";
import { getAllPosts } from "@/lib/content";

export default function HomePage() {
  const posts = getAllPosts();

  const leading = posts.slice(0, 2);
  const remaining = posts.slice(2);

  return (
    <Container>
      <main>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
          {leading.map((post, index) => (
            <PostCard
              key={post.slug}
              post={post}
              aspect="landscape"
              preloadImage={index === 0}
            />
          ))}
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {remaining.map((post) => (
            <PostCard key={post.slug} post={post} aspect="square" />
          ))}
        </div>
      </main>
    </Container>
  );
}

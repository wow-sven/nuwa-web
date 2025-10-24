import Link from "next/link";

import Container from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        404 — Page not found
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        Sorry, we couldn&apos;t find what you were looking for.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Go back home
        </Link>
      </div>
    </Container>
  );
}

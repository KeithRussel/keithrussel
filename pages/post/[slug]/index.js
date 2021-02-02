import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
    revalidate: 10,
  };
};

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  // fallback ->
  return {
    paths: [],
    fallback: true,
  };
};

const post = ({ post }) => {
  console.log(post);

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Link href='/blog'>
        <a>Go Back</a>
      </Link>
      <h1>This is post</h1>
    </div>
  );
};

export default post;

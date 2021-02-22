import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Blog.module.css';
import Image from 'next/image';

const { CONTENT_API_KEY, BLOG_URL } = process.env;

// const BLOG_URL = 'https://ghostcms-portfolio-backend.herokuapp.com';
// const CONTENT_API_KEY = '5dc3ad60c1aeb504afd64ec2a4';

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image`
  );
  const posts = await res.json();

  console.log(posts);

  return {
    props: { posts },
  };
};

const blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Keith Russel | Blog</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.container}>
        <h1>Blog Posts</h1>
        <div className={styles.gridColumns}>
          {posts.posts.map((post, index) => {
            return (
              <div key={post.slug} className={styles.post}>
                <Image
                  src={post.feature_image}
                  alt={post.title}
                  width={500}
                  height={500}
                />
                <Link href='/post/[slug]' as={`/post/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default blog;

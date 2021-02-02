import React from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';

const { CONTENT_API_KEY, BLOG_URL } = process.env;

// const BLOG_URL = 'https://ghostcms-portfolio-backend.herokuapp.com';
// const CONTENT_API_KEY = '5dc3ad60c1aeb504afd64ec2a4';

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
  );
  const posts = await res.json();

  // console.log(res);

  return {
    props: { posts },
  };
};

const blog = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h1>Works In Progress implementing ghost backend cms</h1>
      <ul>
        {posts.posts.map((post, index) => {
          return (
            <li key={post.slug}>
              <Link href='/post/[slug]' as={`/post/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default blog;

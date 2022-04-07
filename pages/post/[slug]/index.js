import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Blog.module.css";

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
    revalidate: 10, // run at most 1 request to the ghost CMS in the backend
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
  // console.log({ post });

  const [enableLoadComments, setEnableLoadComments] = useState(true);

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  function loadComments() {
    // load disqus
    setEnableLoadComments(false);

    window.disqus_config = function () {
      this.page.url = window.location.href; // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = post.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    const script = document.createElement("script");
    script.src = "https://portfolio-nextjs.disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now().toString());

    document.body.appendChild(script);
  }

  return (
    <div className={styles.singlePost}>
      <div className={styles.mxAuto}>
        <Link href="/blog">
          <button className={styles.goback}>Go Back</button>
        </Link>
      </div>
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

        {enableLoadComments && (
          <div className={styles.textCenter}>
            <button className={styles.goback} onClick={loadComments}>
              Load Comments
            </button>
          </div>
        )}

        <div id="disqus_thread"></div>
      </div>
    </div>
  );
};

export default post;

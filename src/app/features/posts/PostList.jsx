import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";

function PostList() {
  const posts = useSelector(selectAllPost);

  const renderedPosts = posts.map((item) => (
    <article className="post-article"
    key={item.id}>
      <h3 className="post-article__post">{item.title}</h3>
      <p>{item.content.substring(0, 100)}</p>
    </article>
  ));
 

  

  return (
    <>
      <section >
        <h2 className="post-article__title">Posts</h2>
        {renderedPosts}
      </section>
    </>
  );
}

export default PostList;

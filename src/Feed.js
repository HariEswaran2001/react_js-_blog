import React from "react";
import Post from "./Post";

const Feed = ({ post }) => {
  return (
    <div>
      {post.map((posts) => (
        <Post key={posts.id} post={posts} />
      ))}
    </div>
  );
};

export default Feed;

import React, { useContext } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { handleDelete, posts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <div>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
            <Outlet />
          </div>
        )}
        {!post && (
          <div>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing</p>
            <p>
              <Link to="/"> Vist Our HomePage</Link>
            </p>
            <Outlet />
          </div>
        )}
      </article>
    </main>
  );
};

export default PostPage;

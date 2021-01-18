import React from "react";
import {} from "react-router-dom";
import NewPostForm from "./NewPostForm";

const NewPost = () => {
  return (
    <div class="text-left">
      <h1>New Post</h1>
      <container>
        <NewPostForm />
      </container>
    </div>
  );
};

export default NewPost;

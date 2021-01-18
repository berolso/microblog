import React from "react";
import { useParams } from "react-router-dom";
import PostComments from './PostComments'

const Post = () => {
  const { postId } = useParams();
  return (
    <div class="text-left">
      <h1>Post 1</h1>
      <div>test</div>
      <div class="d-flex">
        <div>{postId}</div>
        <div class="d-flex ml-auto">
          <i className="fas fa-edit text-primary" />
          <i className="fas fa-times text-danger ml-3" />
        </div>
      </div>
      <PostComments/>
    </div>
  );
};

export default Post;

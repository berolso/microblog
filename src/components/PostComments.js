import React from "react";
import Comment from './Comment'
import CommentForm from './CommentForm'

const PostComments = () => {
  return (
    <div class="text-left">
      <h1>Comments</h1>
      <Comment/>
      <br/>
      <CommentForm/>
    </div>
  );
};

export default PostComments;

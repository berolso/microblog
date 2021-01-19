import React, { useState, useEffect,useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PostComments from "./PostComments";
import { getPost } from "../actions/posts";

const Post = () => {
  const [visited, setVisited] = useState(null);
  const { postId } = useParams();

  // useSelector runs before redux store is populated.. what's a nice way around this?
  const post = useSelector((st) => st.posts[postId] || null );
  console.log(post);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPostFromAPI = async () => {
      await dispatch(getPost(postId));
    };
    if(!post){
      getPostFromAPI();
    }
  }, [dispatch, postId, post]);

  if(!post) return '..Loading'

  return (
    <div class="text-left">
      <h1>{post.title}</h1>
      <div>test</div>
      <div class="d-flex">
        <div>{postId}</div>
        <div class="d-flex ml-auto">
          <i className="fas fa-edit text-primary" />
          <i className="fas fa-times text-danger ml-3" />
        </div>
      </div>
      <PostComments />
    </div>
  );
};

export default Post;

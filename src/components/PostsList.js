import React, { useEffect } from "react";
import {} from "react-router-dom";
import PostCard from "./PostCard";

import { useDispatch, useSelector } from "react-redux";
import { getTitlesAPI } from "../actions/posts";

const PostLists = () => {
  const dispatch = useDispatch();
  const { titles } = useSelector((store) => store);
  console.log(titles);

  useEffect(() => {
    const getPosts = async () => {
      await dispatch(getTitlesAPI());
    };
    getPosts();
  }, [dispatch]);



  const list = titles ? (
    titles.map((title) => (
      <PostCard
        key={title.id}
        id={title.id}
        title={title.title}
        description={title.description}
        votes={title.votes}
      />
    ))
  ) : (
    <h1>..Loading</h1>
  );

  return (
    <div class="text-left">
      <h1>All Posts</h1>
      {list}
    </div>
  );
};

export default PostLists;

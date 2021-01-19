import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, description, votes }) => {
  return (
    <div class="card text-dark m-5">
      <div class="card-header">{title}</div>
      <div class="card-body">
        <h5 class="card-title">{description}</h5>
        {/* <p class="card-text">{votes}</p> */}
        <Link to={`/${id}`} class="btn btn-primary">
          See Post
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

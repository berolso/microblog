import React from "react";
import { NavLink } from "react-router-dom";

const JumboNav = () => {
  return (
    <div>
      <div class="lead text-left d-flex m">
        <NavLink exact to="/">
          <div class="btn btn-primary btn-lg m-2" role="button">
            Blog
          </div>
        </NavLink>
        <NavLink exact to="/new" class="m-2">
          <div>New Post</div>
        </NavLink>
      </div>
    </div>
  );
};

export default JumboNav;

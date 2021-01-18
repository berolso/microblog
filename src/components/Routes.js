import React from "react";
import { Route, Switch } from "react-router-dom";
import NewPost from "./NewPost";
import Post from "./Post";
import PostsList from "./PostsList";

const Routes = () => {
  return (
    <div class="container">
      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/">
          <PostsList />
        </Route>
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;

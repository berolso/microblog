import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addPost} from '../actions/posts'

const NewPostForm = () => {
  const initState = {
    title: "",
    description: "",
    body: "",
  };
  const [formData, setFormData] = useState(initState);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(formData));
    history.push("/");
  };

  const cancel = () => {
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="blog title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            type="description"
            class="form-control"
            id="description"
            placeholder="blog description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="body">Body</label>
          <textarea
            class="form-control"
            id="body"
            placeholder="blog body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
        <div>
          <button class="btn btn-primary m-1">Submit</button>
          <button class="btn btn-secondary m-1" onClick={cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;

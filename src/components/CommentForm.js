import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CommentForm = () => {
  const initState = {
    title: "",
    description: "",
    body: "",
  };
  const [formData, setFormData] = useState(initState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group d-flex">
          {/* <label for="comment" class='mr-2'>Title</label> */}
          <input
            type="text"
            class="form-control"
            id="comment"
            placeholder="blog comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
          <button class="btn btn-primary mb-3 ml-2">Comment</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;

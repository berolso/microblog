import axios from "axios";

import { ADD_POST, GET_TITLES_FROM_API, GET_POST } from "./types";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export const getTitlesAPI = () => {
  const thunk = async (dispatch) => {
    const { data } = await axios.get(`${API_URL}`);
    return dispatch({ type: GET_TITLES_FROM_API, titles: data });
  };
  return thunk;
};

export const addPost = (post) => {
  return async function (dispatch) {
    const { title, description, body } = post;
    const res = axios.post(`${API_URL}`, { title, description, body });
    return dispatch({ type: ADD_POST, post: res });
  };
};

export const getPost = (id) => {
  return async function (dispatch) {
    const {data} = await axios.get(`${API_URL}/${id}`);
    return dispatch({ type: GET_POST, post: data });
  };
};

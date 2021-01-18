import {ADD_POST} from './types'

import { v4 as uuid } from "uuid";

export const addPost = (post) => {
  return { type: ADD_POST, post: { ...post, id: uuid() } };
};

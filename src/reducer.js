import { GET_TITLES_FROM_API, ADD_POST, GET_POST } from "./actions/types";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, [action.post.id]: action.post };

    case GET_TITLES_FROM_API:
      return { ...state, titles: action.titles };

    case GET_POST:
      return {
        ...state,
        posts: { ...state.posts, [action.post.id]: action.post },
      };

    default:
      return state;
  }
};

export default reducer;

import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions";

const fetchPosts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      return {
        ...state,
        [action.payload.data.id]: action.data.payload
      };
    default:
      return state;
  }
};

export default fetchPosts;

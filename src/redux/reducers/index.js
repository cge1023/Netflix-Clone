import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({
  movie: movieReducer,
  review: reviewReducer,
});

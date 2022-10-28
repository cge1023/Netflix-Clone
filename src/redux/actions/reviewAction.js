import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getReviews(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_REVIEWS_REQUEST" });
      const reviewApi = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      let [reviewList] = await [reviewApi];

      console.log(reviewList);

      dispatch({
        type: "GET_REVIEWS_SUCCESS",
        payload: {
          reviewList: (await reviewList).data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_REVIEWS_FAILURE" });
    }
  };
}

export const reviewAction = {
  getReviews,
};

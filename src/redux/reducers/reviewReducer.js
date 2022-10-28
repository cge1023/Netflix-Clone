let initialState = {
  reviewList: [],
};

function reviewReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_REVIEWS_REQUEST":
      return { ...state };

    case "GET_REVIEWS_SUCCESS":
      return { ...state, reviewList: payload.reviewList };

    case "GET_REVIEW_FAILURE":
      return { ...state };

    default:
      return { ...state };
  }
}

export default reviewReducer;

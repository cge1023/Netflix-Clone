import { useParams, useLocation } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reviewAction } from "../redux/actions/reviewAction";

const MovieDetail = () => {
  const dispatch = useDispatch();

  const { genreList } = useSelector((state) => state.movie);
  const { reviewList } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(reviewAction.getReviews(id));
  }, []);

  const { id } = useParams();
  const location = useLocation();

  let movie = location.state.item;
  let reviews = reviewList.results;

  console.log("genreList", genreList);
  console.log("reviewList", reviews);

  return (
    <>
      <div className="wrapper">
        <div
          className="poster"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url('https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${movie.poster_path}')`,
            width: "40%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="movieInfo">
          <div className="genre">
            {movie.genre_ids.map((id) => (
              <Badge
                bg="danger"
                style={{ marginRight: "10px", fontSize: "15px" }}
              >
                {genreList.find((item) => item.id === id).name}
              </Badge>
            ))}
          </div>
          <div className="title">
            <h1>{movie.title}</h1>
          </div>
          <div className="detailInfo">
            <span className="rating">⭐️ {movie.vote_average}</span>
            <span className="popularity">👤 {movie.popularity}</span>
            <span className="adult">
              {movie.adult ? (
                <Badge bg="danger">청소년 관람 불가</Badge>
              ) : (
                <Badge bg="warning" text="dark">
                  12세 이상 관람가
                </Badge>
              )}
            </span>
          </div>
          <div className="divider"></div>
          <div className="overview">OVERVIEW</div>
          <div>{movie.overview}</div>
          <div className="divider"></div>
          <div className="review">REVIEW</div>
          {reviews && reviews.length !== 0 ? (
            reviews.map((item) => (
              <>
                <div style={{ margin: "0", fontWeight: "bolder" }}>
                  {item.author}
                </div>
                <div>{item.content}</div>
                <div className="divider"></div>
              </>
            ))
          ) : (
            <div>No reviews yet</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;

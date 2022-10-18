import React, { useEffect } from "react";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // loading이 true면 loading 스피너를 보여주고
  // loading이 false면 데이터를 보여주고

  // true: 데이터 도착 전
  // false: 데이터 도착 후, 에러가 났을 때
  if (loading) {
    return (
      <div className="loadingDiv">
        <ClipLoader color="#fffff" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <>
      <Banner movie={popularMovies.results[0]} />
      <div className="category">Popular Movies</div>
      <MovieSlide movies={popularMovies} />
      <div className="category">Top Rated Movies</div>
      <MovieSlide movies={topRatedMovies} />
      <div className="category">Upcoming Movies</div>
      <MovieSlide movies={upcomingMovies} style={{ marginBottom: "20px" }} />
    </>
  );
};

export default Home;

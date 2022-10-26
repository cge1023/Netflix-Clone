import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword").toLowerCase();

  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  const movies = [
    popularMovies.results,
    topRatedMovies.results,
    upcomingMovies.results,
  ];

  console.log(movies);
  const searchList = [];

  for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < 20; j++) {
      if (movies[i][j].title.toLowerCase().includes(keyword)) {
        searchList.push(movies[i][j]);
      }
    }
  }
  console.log(searchList);

  return (
    <>
      <div className="searchText">"{keyword}"의 검색 결과 입니다</div>
      <div className="container">
        {searchList.map((item) => {
          return <MovieCard item={item} />;
        })}
      </div>
    </>
  );
};

export default Search;

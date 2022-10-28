import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  let navigate = useNavigate();
  console.log(item);
  console.log("genreList : ", genreList);

  const clickedMovieCard = () => {
    navigate(`/movies/${item.id}`, {
      state: {
        item: item,
      },
    });
  };

  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: "transparent",
          backgroundImage: `url('https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}')`,
          backgroundSize: "contain",
        }}
        onClick={clickedMovieCard}
      >
        <div className="overlay">
          <div id="title">{item.title}</div>
          <div id="genre">
            {item.genre_ids.map((id) => (
              <Badge bg="danger" style={{ marginRight: "3px" }}>
                {genreList.find((item) => item.id === id).name}
              </Badge>
            ))}
          </div>
          <div id="detail">
            <span style={{ marginRight: "3px" }}>
              <Badge bg="warning" text="dark">
                {item.vote_average}점
              </Badge>
            </span>
            <span>
              {item.adult ? (
                <Badge bg="danger">청소년 관람 불가</Badge>
              ) : (
                <Badge bg="warning" text="dark">
                  12세 이상 관람가
                </Badge>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

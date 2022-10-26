import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { id } = useParams();

  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  const movies = [
    popularMovies.results,
    topRatedMovies.results,
    upcomingMovies.results,
  ];
  console.log(movies);
  // 선택된 movie card의 정보만 detail페이지에 전달하는게 불가능 한가요?
  // movie list 데이터 전체를 불러와 특정 영화를 for문으로 조회하는 건 비효율적이라고 생각함..
  for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < 20; j++) {
      if (movies[i][j].id == id) {
        return (
          <>
            <div className="wrapper">
              <div className="poster"></div>
              <div className="movieInfo">
                <div className="genre">
                  <span>
                    <Badge bg="danger">Action</Badge>
                  </span>
                </div>
                <div className="title">
                  <h1>SONIC THE HEDGEHOG 2</h1>
                </div>
                <div>
                  <span className="rating">7.8</span>
                  <span className="popularity">6401,627</span>
                  <span className="adult">청소년 관람가</span>
                </div>
                <div className="divider"></div>
                <div className="overview">영화요약 블라블라</div>
                <div className="divider"></div>
              </div>
            </div>
          </>
        );
      }
    }
  }
};

export default MovieDetail;

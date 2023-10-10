import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("https://www.omdbapi.com/?t=batman&apikey=bb1151cd");
  console.log(movies);
  return (
    <>
      {movies && (
        <div className="card lg:card-side bg-base-100 shadow-xl  mb-10">
          <figure>
            <img src={movies.Poster} alt="Movie" />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <div>
              <h2 className="card-title mx-auto font-bold text-4xl mb-5">
                {movies.Title}
              </h2>
              <h1>
                <span className="font-bold">Country: </span>
                {movies.Country}
              </h1>
              <h1>
                <span className="font-bold">Year: </span>
                {movies.Year}
              </h1>
              <h1>
                <span className="font-bold">Runtime: </span>
                {movies.Runtime}
              </h1>
            </div>

            <div className="card-actions justify-end">
              <Link to={`/movie/${movies.Title}`} className="btn btn-neutral">
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

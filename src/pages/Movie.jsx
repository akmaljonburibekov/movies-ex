import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Movie() {
  const { Title } = useParams();
  const url = `https://www.omdbapi.com/?t=${Title}&apikey=bb1151cd`;
  const { data: movie, isPending, error } = useFetch(url);
  console.log(movie);
  console.log(Title);
  console.log(url);
  return (
    <>
      {movie && (
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full" src={movie.Poster} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;

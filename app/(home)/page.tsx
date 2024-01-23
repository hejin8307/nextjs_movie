import Movie from "../../components/movie";
import { API_URL } from "../constance";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // nextjs caches data automatically, so we don't need to fetch data again after changing a page
  // this way can hide a API on Network tab
  // await new Promise((res) => setTimeout(res, 10000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className="grid grid-cols-5 gap-6 w-full max-w-[90%] m-auto">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}

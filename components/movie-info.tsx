import { API_URL } from "../app/constance";

export async function getMovie(id: string) {
  // await new Promise((res) => setTimeout(res, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className="grid grid-cols-[1fr,2fr] gap-12 w-4/5 m-auto">
      <img
        className="rounded-[20px] max-w-9/12 place-self-center"
        src={movie.poster_path}
      />
      <div className="flex flex-col mt-5 gap-5">
        <h1 className="text-white text-4xl font-semiboldß">{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}

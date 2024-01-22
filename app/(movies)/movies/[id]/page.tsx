import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // if there're multiple requests to call, that's the way to call it in parallel
  // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      {/* Suspense function is to wait a logic to finish and while it's done Suspense shows user fallback */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}

import { API_URL } from "../app/constance";

async function getVideos(id: string) {
  // await new Promise((res) => setTimeout(res, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-4/5 m-auto mt-24 pb-24">
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
          className="w-64 rounded-xl opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100 my-4"
        />
      ))}
    </div>
  );
}

import { fetchAPI } from "../fetch";

export default function SacoCheio() {
  const { data: videos, error } = fetchAPI('/podcast-saco-cheio');

  if (error) {
    return <div>Opss.. {error.message}</div>;
  }

  if (!videos) {
    return <div>Carregando ...</div>;
  }

  return (
    <div>
      <ul>
        {videos.map((video) => (
          <>
            <h2>{video.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.video_url}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
              ></iframe>
            </>
        ))}
      </ul>
    </div>
  )
}
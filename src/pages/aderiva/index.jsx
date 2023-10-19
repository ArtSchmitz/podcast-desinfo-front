import React from "react";
import { fetchAPI } from "../fetch";

export default function Aderiva() {
  const { data: videos, error } = fetchAPI("podcast-aderiva");

  if (error) {
    return <div>Opss.. {error.message}</div>;
  }

  if (!videos) {
    return <div>Carregando ...</div>;
  }

  return (
    <>
      <h1>Aderiva Podcast</h1>
      <ul>
        {videos.map((video) => (
          <div className="lindonjonson">
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
          </div>
        ))}
      </ul>
    </>
  );
}

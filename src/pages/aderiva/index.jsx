import React from "react";
import { fetchAPI } from "../fetch";
import { Container } from "././styles";
import VideoComponent from "@/components/VideoComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default function Aderiva() {
  const { data: videos, error } = fetchAPI("/podcast-aderiva");
  const { data: infos } = fetchAPI("/aderiva-info");
  const channelName = infos?.channel_name;

  if (error) {
    return <div>Opss.. {error.message}</div>;
  }

  if (!videos) {
    return <div>Carregando ...</div>;
  }

  return (
    <Container>
      <HeaderComponent channel_name={channelName} />
      {videos?.map((video) => (
        <VideoComponent video_title={video.title} video_url={video.video_url} />
      ))}
    </Container>
  );
}

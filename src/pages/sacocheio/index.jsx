import { fetchAPI } from "../fetch";
import { Container } from "././styles";

import HeaderComponent from "@/components/HeaderComponent";
import VideoComponent from "@/components/VideoComponent";

export default function SacoCheio() {
  const { data: videos, error } = fetchAPI("/podcast-saco-cheio");
  const { data: infos } = fetchAPI("/saco-cheio-info");

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
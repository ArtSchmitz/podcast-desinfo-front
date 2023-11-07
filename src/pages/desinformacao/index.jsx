import Link from "next/link";
import { fetchAPI } from "../fetch";
import { Container, Row, Header } from "./styles";

import HeaderComponent from "@/components/HeaderComponent";
import VideoComponent from "@/components/VideoComponent";

export default function Desinformacao() {
  const { data: videos, error } = fetchAPI('/podcast-desinfo')
  const { data: infos } = fetchAPI("/desinfo-info");

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

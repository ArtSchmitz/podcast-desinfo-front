import useSWR from "swr";
import { Container, Row, Header } from "./styles";
import Link from "next/link";
import { fetchAPI } from "../fetch";

export default function Desinformacao() {
  const { data: videos, error } = fetchAPI('podcast-desinfo')

  if (error) {
    return <div>Opss.. {error.message}</div>;
  }

  if (!videos) {
    return <div>Carregando ...</div>;
  }

  return (
    <Container>
      <Header>
        <h1>Podcast <span>desinformação</span></h1>
        <Link href="/">Voltar</Link>
      </Header>
      <ul>
        {videos.map((video) => (
          <Row>
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
          </Row>
        ))}
      </ul>
    </Container>
  );
}

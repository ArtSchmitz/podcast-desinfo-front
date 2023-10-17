import useSWR from "swr";
import { Container, Row, Header } from "./styles";

export default function Desinformacao() {
  const { data: videos, error } = useSWR("http://127.0.0.1:8000/api/podcast-desinfo",async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
  );

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
        <a href="/">Voltar</a>
      </Header>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <Row>
              <h2>{video.title}</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.video_id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Row>
          </li>
        ))}
      </ul>
    </Container>
  );
}

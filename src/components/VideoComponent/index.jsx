import React from "react"
import { Row } from "./styles"

function VideoComponent ({ video_title, video_url }) {
  return (
    <Row>
      <h2>{video_title}</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video_url}`}
        title={video_title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Row>
  )
}

export default VideoComponent
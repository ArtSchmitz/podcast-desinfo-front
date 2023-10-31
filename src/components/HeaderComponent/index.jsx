import React from "react";
import Link from "next/link";
import { Header } from "./styles";

function HeaderComponent ({ channel_name }) {
  return (
    <Header>
      <h1>{channel_name}</h1>
      <Link href="/">Voltar</Link>
    </Header>
  )
}

export default HeaderComponent;
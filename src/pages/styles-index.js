import styled from "styled-components";

export const Header = styled.div`

`;

export const SectionOne = styled.div`
  height: 100vh;
  background-color: #141414;
`;

export const ContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25vh;

  h1{
    font-size: 48px;
    text-transform: uppercase;
    color: #fff;
  }

  span{
    color: #FFC739;
  }
`;

export const PodcastSection = styled.div`
  margin: 5%;

  a{
    text-decoration: none;
  }

  button {
    margin: 20px;
    min-width: 350px;
    height: 100px;
    font-size: 24px;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease-in 0.3s;
    border: solid 2px transparent;
    background-color: #fff;
  }

  button:hover{
    background: #FFC739;
    color: #fff;
  }
`;

export const SectionTwo = styled.div`

`;
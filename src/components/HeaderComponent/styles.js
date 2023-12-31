import styled from "styled-components";

export const Header = styled.div`
  background-color: #000;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    padding: 50px;
    color: #FFC739;
  }

  a{
    color: #FFC739;
    padding-right: 100px;
    text-decoration: none;
    font-size: 20px;
  }

  a:hover {
    color: #fff;
  }
`;
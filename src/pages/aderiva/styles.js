import styled from "styled-components";

export const Container = styled.div`
  background: #035E7B;

  ul {
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  background-color: #000;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    padding: 50px;
    color: #fff;
  }

  span {
    color: #FFC739;
  }
`;

export const Row = styled.div`
  h2 {
    font-size: 20px;
  }
`;

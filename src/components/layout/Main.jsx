import styled from "styled-components";

const Main = ({ children }) => {
  return <MainComponent>{children}</MainComponent>;
};

export default Main;

const MainComponent = styled.main`
  box-sizing: border-box;
`;

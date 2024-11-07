import styled from "styled-components";

import pokemonBall from "../../assets/pokemonBall.svg";

const Header = () => {
  return (
    <HeaderComponents>
      <HeaderInner>
        <HeaderLogo src={pokemonBall} alt="몬스터볼" />
        <HeaderTitle>포켓몬 도감</HeaderTitle>
      </HeaderInner>
    </HeaderComponents>
  );
};

export default Header;

const HeaderComponents = styled.header`
  box-sizing: border-box;
  padding: 0.5rem;
`;

const HeaderInner = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const HeaderLogo = styled.img`
  transform: rotate(-30deg);
  width: 3rem;
  height: 3rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 1px;
`;

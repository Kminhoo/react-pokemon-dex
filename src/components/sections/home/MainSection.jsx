import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Button from "../../common/Button";

import pokemonLogo from "../../../assets/pokemonLogo.png";

const MainSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pokemon-dex");
  };

  return (
    <MainSectionComponent>
      <SectionInner>
        <SectionLogo src={pokemonLogo} alt="포켓몬 로고" />
        <Button
          label="포켓몬 도감 시작하기"
          onClick={handleClick}
          $width
          $backgroundColor
        />
      </SectionInner>
    </MainSectionComponent>
  );
};

export default MainSection;

const MainSectionComponent = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
`;

const SectionLogo = styled.img`
  max-width: 40rem;
  width: 100%;
  height: auto;
`;

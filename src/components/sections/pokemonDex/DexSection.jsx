import styled from "styled-components";

import TotalCardList from "../../ui/ToTalCardList";
import MyPokemonList from "../../ui/MyPokemonList";

const DexSection = () => {
  return (
    <DexSectionComponent>
      <DexSectionInner>
        <MyPokemonList />
        <TotalCardList />
      </DexSectionInner>
    </DexSectionComponent>
  );
};

export default DexSection;

const DexSectionComponent = styled.section`
  box-sizing: border-box;
`;

const DexSectionInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

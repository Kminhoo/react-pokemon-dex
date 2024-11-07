import styled from "styled-components";

import PokemonCard from "../common/PokemonCard";

const ToTalCardList = ({ pokemon, onClick }) => {
  return (
    <ToTalGridContainer>
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          add={true}
          onClick={onClick}
        />
      ))}
    </ToTalGridContainer>
  );
};

export default ToTalCardList;

const ToTalGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  background-color: rgb(240, 240, 240);
  padding: 1.5rem;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0.8rem;
`;

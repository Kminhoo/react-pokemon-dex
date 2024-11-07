import { useSelector } from "react-redux";

import styled from "styled-components";

import PokemonCard from "../common/PokemonCard";

const TotalCardList = () => {
  const { totalPokemon } = useSelector((state) => state.pokemon);

  return (
    <ToTalGridContainer>
      {totalPokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} add={true} />
      ))}
    </ToTalGridContainer>
  );
};

export default TotalCardList;

const ToTalGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  background-color: rgb(240, 240, 240);
  padding: 1.5rem;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 0.8rem;
`;

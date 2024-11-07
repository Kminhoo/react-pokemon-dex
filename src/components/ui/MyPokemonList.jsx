import { useSelector } from "react-redux";

import styled from "styled-components";

import NoPokemonCard from "../common/NoPokemonCard";
import PokemonCard from "../common/PokemonCard";

const MyPokemonList = () => {
  const { myPokemon } = useSelector((state) => state.pokemon);

  return (
    <MyPokemonListContainer>
      <MyPokemonListTitle>나만의 포켓몬</MyPokemonListTitle>
      <MyPokemonListGrid>
        {myPokemon.map((pokemon, index) =>
          pokemon ? (
            <PokemonCard pokemon={pokemon} key={pokemon.korean_name} />
          ) : (
            <NoPokemonCard key={index} />
          )
        )}
      </MyPokemonListGrid>
    </MyPokemonListContainer>
  );
};

export default MyPokemonList;

const MyPokemonListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: rgb(248, 248, 248);
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const MyPokemonListTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
  color: #2a75bb;
`;

const MyPokemonListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 100%;
  justify-items: center;
`;

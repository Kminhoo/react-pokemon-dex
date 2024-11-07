import { useState } from "react";

import styled from "styled-components";

import ToTalCardList from "../../ui/ToTalCardList";
import MyPokemonList from "../../ui/MyPokemonList";

import POKEMON_DATA from "../../../data/pokemonData";

const DexSection = () => {
  const [myPokemon, setMyPokemon] = useState(new Array(6).fill(null));

  const [totalPokemon] = useState(POKEMON_DATA);

  const addPokemon = (e, id) => {
    e.stopPropagation();

    // 포켓몬이 있는지 확인
    const alreadySeleted = myPokemon.find(
      (pokemon) => pokemon && pokemon.id === id
    );

    if (alreadySeleted) {
      alert("이미 선택된 포켓몬 입니다.");
      return;
    }

    // 배열의 요소가 null인 가장 첫번째 요소를 반환함
    const emptySlot = myPokemon.findIndex((slot) => slot === null);

    if (emptySlot < 6) {
      const newPokemon = totalPokemon.find((pokemon) => pokemon.id === id);
      const updatedMyPokemon = [...myPokemon];
      updatedMyPokemon[emptySlot] = newPokemon;
      setMyPokemon(updatedMyPokemon);
    }

    if (emptySlot === -1) {
      alert("포켓몬은 최대 6마리가 까지만 잡을 수 있어요!");
    }
  };

  const removePokemon = (e, id) => {
    e.stopPropagation();
    const filteredPokemon = myPokemon.map((pokemon) =>
      pokemon?.id === id ? null : pokemon
    );

    setMyPokemon([...filteredPokemon]);
  };

  return (
    <DexSectionComponent>
      <DexSectionInner>
        <MyPokemonList myPokemon={myPokemon} onClick={removePokemon} />
        <ToTalCardList pokemon={totalPokemon} onClick={addPokemon} />
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

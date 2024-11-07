import { createContext, useContext, useState } from "react";

import POKEMON_DATA from "../data/pokemonData";

export const PokemonContext = createContext(null);

export const PokemonContextProvider = ({ children }) => {
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
    <PokemonContext.Provider
      value={{ myPokemon, totalPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error("Context 내부에서만 사용이 가능합니다.");
  }

  return context;
};

import { createSlice } from "@reduxjs/toolkit";

import POKEMON_DATA from "../../data/pokemonData";

import { toast } from "react-toastify";

const initialState = {
  myPokemon: new Array(6).fill(null),
  totalPokemon: POKEMON_DATA,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const id = action.payload;

      // 포켓몬이 있는지 확인
      const alreadySeleted = state.myPokemon.find(
        (pokemon) => pokemon && pokemon.id === id
      );

      if (alreadySeleted) {
        toast.info("이미 선택된 포켓몬 입니다.");
        return;
      }

      const emptySlot = state.myPokemon.findIndex((slot) => slot === null);

      if (emptySlot === -1) {
        toast.warn("포켓몬은 최대 6마리까지만 잡을 수 있어요!");
        return;
      }

      if (emptySlot < 6) {
        const newPokemon = state.totalPokemon.find(
          (pokemon) => pokemon.id === id
        );

        state.myPokemon[emptySlot] = newPokemon;
      }
    },

    removePokemon: (state, action) => {
      const id = action.payload;

      const filteredPokemon = state.myPokemon.map((pokemon) =>
        pokemon?.id === id ? null : pokemon
      );
      state.myPokemon = filteredPokemon;
      toast.success("포켓몬을 삭제했습니다.");
    },

    detailAddPokemon: (state, action) => {
      const id = action.payload;

      const alreadySeleted = state.myPokemon.find(
        (pokemon) => pokemon && pokemon.id === id
      );

      if (alreadySeleted) {
        toast.info("이미 선택된 포켓몬 입니다.");
        return;
      }

      const emptySlot = state.myPokemon.findIndex((slot) => slot === null);

      if (emptySlot === -1) {
        toast.warn("포켓몬은 최대 6마리까지만 잡을 수 있어요!");
        return;
      }

      if (emptySlot < 6) {
        const newPokemon = state.totalPokemon.find(
          (pokemon) => pokemon.id === id
        );

        state.myPokemon[emptySlot] = newPokemon;
        toast.success("포켓몬을 추가했어요!");
      }
    },
  },
});

export const { addPokemon, removePokemon, detailAddPokemon } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;

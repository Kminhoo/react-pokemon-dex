import { PokemonContextProvider } from "../context/pokemonContext";

import DexSection from "../components/sections/pokemonDex/DexSection";

const PokemonDexPage = () => {
  return (
    <>
      <PokemonContextProvider>
        <DexSection />
      </PokemonContextProvider>
    </>
  );
};

export default PokemonDexPage;

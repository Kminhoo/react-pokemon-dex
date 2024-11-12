import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const useFetchPokemon = () => {
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemData = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/pokemonData.json");
        const data = await response.json();
        const result = data.find((item) => item.id === parseInt(id));

        setPokemonData(result);
        setLoading(false);
      } catch (error) {
        throw new Error(`${error}가 발생했습니다.`);
      }
    };

    fetchPokemData();
  }, [id]);

  return { loading, pokemonData };
};

export default useFetchPokemon;

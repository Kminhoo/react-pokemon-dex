import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import styled from "styled-components";

import PokemonDetail from "../../ui/PokemonDetail";
import Loading from "../../ui/Loading";

const DetailSection = () => {
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
        console.log(error);
      }
    };

    fetchPokemData();
  }, [id]);

  if (loading) {
    return (
      <DetailSectionComponent>
        <DetailInner>
          <Loading />
        </DetailInner>
      </DetailSectionComponent>
    );
  }

  return (
    <DetailSectionComponent>
      <DetailInner>
        {pokemonData ? (
          <PokemonDetail pokemonData={pokemonData} />
        ) : (
          <p>포켓몬 데이터를 찾을 수 없습니다.</p>
        )}
      </DetailInner>
    </DetailSectionComponent>
  );
};

export default DetailSection;

const DetailSectionComponent = styled.div`
  box-sizing: border-box;
`;

const DetailInner = styled.div`
  max-width: 1280px;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

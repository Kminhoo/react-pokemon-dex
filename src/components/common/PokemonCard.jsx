import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Button from "./Button";

const PokemonCard = ({ pokemon, onClick, add }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/pokemon-dex/${pokemon.id}`)}>
      <CardImg src={pokemon.img_url} />
      <CardTextContainer>
        <CardTitle>{pokemon.korean_name}</CardTitle>
        <CardNumber>{"No : " + pokemon.id}</CardNumber>
      </CardTextContainer>
      <Button
        label={add ? "추가" : "삭제"}
        onClick={(e) => onClick(e, pokemon.id)}
        $backgroundColor={add ? true : false}
      />
    </CardContainer>
  );
};

export default PokemonCard;

const CardContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 0.8rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
`;

const CardImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

const CardTextContainer = styled.div`
  margin-top: 1rem;
`;

const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0rem;
  color: black;
`;

const CardNumber = styled.p`
  font-size: 0.8rem;
  color: rgb(102, 102, 102);
  margin: 0.5rem 0rem;
`;

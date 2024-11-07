import styled from "styled-components";

import pokemonBall from "../../assets/pokemonBall.svg";

const NoPokemonCard = () => {
  return (
    <BallContainer>
      <BallImg src={pokemonBall} alt="몬스터 볼 이미지" />
    </BallContainer>
  );
};

export default NoPokemonCard;

const BallContainer = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
`;

const BallImg = styled.img`
  width: 3rem;
  height: 3rem;
`;

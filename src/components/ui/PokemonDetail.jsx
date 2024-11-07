import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Button from "../common/Button";

import { detailAddPokemon } from "../../redux/slice/pokemonSlice";

import { useDispatch } from "react-redux";

const PokemonDetail = ({ pokemonData }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDetailAddPokemon = (e) => {
    e.stopPropagation();
    dispatch(detailAddPokemon(pokemonData.id));
  };

  return (
    <DetailContainer>
      <div>
        <DetailImg src={pokemonData.img_url} alt="포켓몬스터" />
      </div>
      <DetailTextContainer>
        <DetailTitle $type={pokemonData.types[0]}>
          {pokemonData.korean_name}
        </DetailTitle>
        <DetailTypes>
          공격 타입 :
          {pokemonData.types.map((type, index) => (
            <span key={index}>{type}.</span>
          ))}
        </DetailTypes>
        <DetailDesc>{pokemonData.description}</DetailDesc>
      </DetailTextContainer>
      <DetailBtnGroup>
        <Button
          label="뒤로가기"
          $backgroundColor
          onClick={() => navigate(-1)}
        />
        <Button
          label="나의 포켓몬 추가하기"
          $width
          onClick={handleDetailAddPokemon}
        />
      </DetailBtnGroup>
    </DetailContainer>
  );
};

export default PokemonDetail;

const fontColor = (type) => {
  switch (type) {
    case "불꽃":
      return "#ff0000";
    case "물":
      return "#2a75bb";
    case "독":
      return "#6F3C91";
    case "비행":
      return "#A3C2E0";
    case "벌레":
      return "#8BC34A";
    case "풀":
      return "#4CAF50";
    case "전기":
      return "#FFEB3B";
    case "땅":
      return "#795548";
    case "격투":
      return "#F44336";
    case "페어리":
      return "#F8BBD0";
    case "고스트":
      return "#9E9E9E";
    case "에스퍼":
      return "#D32F2F";
    case "얼음":
      return "#B2EBF2";
    case "드래곤":
      return "#673AB7";
    case "바위":
      return "#757575";
    default:
      return "#000000";
  }
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const DetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const DetailTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.4;
  letter-spacing: 1px;
  font-weight: 500;
  color: ${(props) => fontColor(props.$type)};
`;

const DetailImg = styled.img`
  width: 15rem;
  height: auto;
`;

const DetailTypes = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const DetailDesc = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
`;

const DetailBtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

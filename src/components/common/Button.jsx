import styled from "styled-components";

const Button = ({ label, onClick, $width, $backgroundColor }) => {
  return (
    <ButtonComponent
      onClick={onClick ? onClick : null}
      $width={$width}
      $backgroundColor={$backgroundColor}
    >
      {label}
    </ButtonComponent>
  );
};

export default Button;

const ButtonComponent = styled.button`
  width: ${(props) => (props.$width ? "10rem" : "5rem")};
  height: ${(props) => (props.$width ? "2.5rem" : "2rem")};
  background-color: ${(props) =>
    props.$backgroundColor ? "#2a75bb" : "#ff0000"};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.$backgroundColor ? "#3d6c97" : "#c91f1f")};
    color: #dfdfdf;
  }
`;

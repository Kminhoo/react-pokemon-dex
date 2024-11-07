import styled from "styled-components";

const Footer = () => {
  return (
    <FooterComponents>
      <FooterInner>
        <FooterText>Copyright © 2024 All rights reserved</FooterText>
      </FooterInner>
    </FooterComponents>
  );
};

export default Footer;

const FooterComponents = styled.footer`
  box-sizing: border-box;
  padding: 0.5rem;
`;

const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
  letter-spacing: 1px;
`;

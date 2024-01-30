import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  color: #333333;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}

  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

export const Text = styled.span`
  display: flex;
  margin-left: 24px;
  height: 44px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  color: ${(props) => props.theme.colorBlackForText};
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

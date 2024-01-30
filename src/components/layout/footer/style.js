import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyleSection = styled(Section)`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${(props) => props.theme.pageWidth};
  min-height: ${(props) => props.theme.minHeight};
  padding-top: 18px;
  padding-bottom: 18px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 20;
`;

export const Copyright = styled.span`
  min-height: 27px;
  min-width: 122px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorBlackForText};
`;

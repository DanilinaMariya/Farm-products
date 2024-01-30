import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const StyledFeatureList = styled(Section)`
  flex-direction: column;
  width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorWhite};
  z-index: 15;
`;

export const FeatureList = styled(Ul)`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  margin-top: 64px;
  margin-bottom: 64px;
  gap: ${(props) => props.theme.padding};
  list-style-type: none;
  text-align: left;
`;

export const FeatureItem = styled(Li)`
  text-align: left;
`;

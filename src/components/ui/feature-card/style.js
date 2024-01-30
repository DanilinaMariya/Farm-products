import styled from "styled-components";
import { Section } from "/src/components/styled";

export const Feature = styled.article`
  min-width: 540px;
  min-height: 197px;
  padding: ${(props) => props.theme.padding};
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForBackgrundFeatureNegative
      : props.theme.colorForBackgrundFeature};
`;

export const FeatureHeader = styled(Section)`
  padding: 0;
  justify-content: start;
  display: grid;
  grid-template-columns: 56px auto;
  grid-template-rows: 27px 27px;
  gap: 0 ${(props) => props.theme.padding};
`;

export const FeatureText = styled.p`
  margin: 0;
  margin-top: 20px;
`;

export const FeatureOwner = styled.span`
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForBackgrundFeatureOwnerNegative
      : props.theme.colorForBackgrundFeatureOwner};
  padding: 2px 10px;
  color: ${(props) => props.theme.colorWhite};
`;

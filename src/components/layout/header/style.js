import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyleSection = styled(Section)`
  padding-top: 10px;
  padding-bottom: 10px;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  position: relative;
  height: ${(props) => props.theme.minHeight};
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
`;

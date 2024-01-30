import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
display: block;
  position: relative;
  width: 1280px;
  margin: 0 auto;
  padding-top: 183px;
  padding-bottom: 183px;
  background-color: rgba(216, 236, 254, 1);
  box-sizing: border-box;

  &::after {
    position: absolute;
    right: 90px;
    top: 76px;
    content: "";
    width: 446px;
    height: 447px;
    background-color: #c4e2ff;
    border-radius: 50%;
    z-index: 5;

  
`;

export const Text = styled(Paragraph)`
  margin-top: 24px;
  padding-right: 99px;
`;

export const AboutWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 637px;

  &::before {
    position: absolute;
    right: 177px;
    top: 37px;
    content: "";
    width: 273px;
    height: 607px;
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
    z-index: 10;
`;

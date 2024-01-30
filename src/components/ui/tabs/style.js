import styled, { css } from "styled-components";
import Title from "/src/components/ui/title/title";

export const TitleList = styled.div`
  display: flex;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TitleButton = styled.span`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  display: block;
  ${(props) =>
    props.active
      ? css`
          background-color: ${props.theme.colorForBackgrundFeatureOwner};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.backgroundColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.fontColorBlack};
        `}
`;

export const TitleText = styled.h3`
  line-height: 21px;
  margin: 0;
  font-size: 14px;
  font-family: ${(props) => props.theme.fontFamily};
`;

export const Content = styled.div`
  padding-top: 16px;
  width: 419px;
  line-height: 21px;
  font-size: 14px;
  box-sizing: border-box;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;

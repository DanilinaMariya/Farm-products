import styled, { css } from "styled-components";

export const TitleSize = {
  BIG: "big",
  DEFAULT: "",
  SMALL: "small",
};

const TitleSizeValue = {
  [TitleSize.BIG]: {
    fontSize: "44px",
    lineHeight: "50px",
  },
  [TitleSize.DEFAULT]: {
    fontSize: "36px",
    lineHeight: "41px",
  },
  [TitleSize.SMALL]: {
    fontSize: "18px",
    lineHeight: "27px",
  },
};
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-weight: bold;
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.DEFAULT];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
    `;
  }};
`;
export default Title;

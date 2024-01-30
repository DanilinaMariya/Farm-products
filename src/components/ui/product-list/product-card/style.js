import styled from "styled-components";

export const StyleProductCard = styled.div`
  display: grid;
  grid-template-columns: 248px auto;
  grid-template-rows: 47px auto;
  column-gap: 20px;
  padding: ${(props) => props.theme.padding};
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const ProductImage = styled.img`
  grid-column: 1;
  grid-row: 1 / 4;
  display: block;
  width: 248px;
  margin: 0;
  padding: 0;
`;

export const ProductTitle = styled.h2`
  grid-column: 2;
  grid-row: 1;
  margin: 0;
  padding: 0 0 16px 0;
  font-size: 24px;
  font-family: ${(props) => props.theme.fontFamily};
  line-height: 31px;
`;

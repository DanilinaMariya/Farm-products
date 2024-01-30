import styled from "styled-components";

export const ProductPrice = styled.span`
  display: block;
  text-align: left;
  padding: 4px 8px;
  background-color: #d8ecfe;
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 14px;
  font-family: ${(props) => props.theme.fontFamily};
  line-height: 21px;
  font-weight: 700;
  margin-top: 14px;
  max-width: 148px;
  min-height: 29px;
  box-sizing: border-box;
`;

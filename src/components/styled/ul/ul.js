import styled, { css } from "styled-components";

const gridList = css`
  margin-top: ${(props) =>
    props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`};
  margin-bottom: ${(props) =>
    props.$indent ? `-${props.$indent}px` : `-${props.theme.indent}`};
  font-size: 0;
  line-height: 0;
  li {
    font-size: ${(props) =>
      props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    line-height: ${(props) =>
      props.$lineHeight
        ? `${props.$lineHeight}px`
        : props.theme.lineHeightDefault};
    padding: ${(props) =>
      props.$padding ? `${props.$padding}px` : props.theme.padding};
  }
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;

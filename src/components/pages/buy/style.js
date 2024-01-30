import styled from "styled-components";
import TextInput from "/src/components/ui/text-input/text-input";
import { Swiper } from "swiper/react";
import Price from "/src/components/ui/price/price";
const LeftWidth = "353px";

export const LeftColumn = styled.div`
  width: ${LeftWidth};
  padding-right: ${(props) => props.theme.padding};
  overflow-y: overlay;
  max-height: 100%;
`;

export const StyledOrder = styled.section`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.padding};
`;

export const PriceLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  overflow: scroll;
  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

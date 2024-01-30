import React from "react";
import { ReactComponent as LogoImages } from "/src/assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./style";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImages />
      <Text> Фермерские продукты </Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImages />
      <Text> Фермерские продукты </Text>
    </StyledLogo>
  );
}

export default Logo;

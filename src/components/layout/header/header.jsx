import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyleSection } from "./style";

function Header() {
  return (
    <StyleSection as="header">
      <Logo />
      <Nav />
    </StyleSection>
  );
}

export default Header;

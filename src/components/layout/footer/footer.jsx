import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { Copyright, StyleSection } from "./style";

function Footer() {
  return (
    <StyleSection as="footer">
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyleSection>
  );
}

export default Footer;

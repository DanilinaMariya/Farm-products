import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { StylePageWrapper } from "./style";
import { Outlet } from "react-router-dom";

function PageWrapper({ features, products }) {
  return (
    <>
      <Header />
      <StylePageWrapper>
        <Outlet />
      </StylePageWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;

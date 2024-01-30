import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./style";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import Boy from "/src/components/pages/buy/buy";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              index
              element={<Boy products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

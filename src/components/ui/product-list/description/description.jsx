import React from "react";
import { ProductPrice } from "./style";

function Description({ text, prise, weight }) {
  return (
    <>
      {text}
      <ProductPrice>
        {prise} руб. / {weight} гр.
      </ProductPrice>
    </>
  );
}

export default Description;

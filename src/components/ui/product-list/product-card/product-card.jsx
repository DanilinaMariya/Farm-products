import React from "react";
import CharacteristicsTabs from "/src/components/ui/product-list/characteristics/characteristics";
import PropertiesTabs from "/src/components/ui/product-list/properties/properties";
import Description from "/src/components/ui/product-list/description/description";
import Tabs from "/src/components/ui/tabs/tabs";
import {
  StyleProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from "./style";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={product.description}
          prise={product.price}
          weight={product.weight}
        />
      ),
    },
    {
      title: "Характеристики",
      content: (
        <CharacteristicsTabs characteristics={product.characteristics} />
      ),
    },
    {
      title: "Свойства",
      content: <PropertiesTabs properties={product.properties} />,
    },
  ];
  console.log(product.characteristics);
  return (
    <StyleProductCard>
      <ProductImage
        width={248}
        height={248}
        src={product.image}
        alt={product.title}
      />
      <Tabs tabs={tabs} maxContentHeiht="105px" />
      <ProductTitle>{product.title}</ProductTitle>
    </StyleProductCard>
  );
}
export default ProductCard;

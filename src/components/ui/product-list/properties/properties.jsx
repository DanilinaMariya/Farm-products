import React from "react";
import { PropertiesList, PropertiesItem, PropertiesValue } from "./style";

function PropertiesTabs({ properties }) {
  return (
    <PropertiesList>
      {properties.map(({ name, value }) => (
        <PropertiesItem>
          {name}
          <PropertiesValue>{value}</PropertiesValue>
        </PropertiesItem>
      ))}
    </PropertiesList>
  );
}
export default PropertiesTabs;

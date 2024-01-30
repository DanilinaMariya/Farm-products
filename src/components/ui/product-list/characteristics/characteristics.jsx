import React from "react";
import {
  CharacteristicsList,
  CharacteristicsItem,
  CharacteristicsValue,
} from "./style";

function CharacteristicsTabs({ characteristics }) {
  return (
    <CharacteristicsList>
      {characteristics.map(({ name, value }) => (
        <CharacteristicsItem>
          {name}
          <CharacteristicsValue>{value}</CharacteristicsValue>
        </CharacteristicsItem>
      ))}
    </CharacteristicsList>
  );
}

export default CharacteristicsTabs;

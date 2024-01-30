import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Feature, FeatureHeader, FeatureText, FeatureOwner } from "./style";

function FeatureCard({
  title, // заголовок
  about, // информация о продукте
  owner, // особенность (фермерские/магазинные)
  isNegative, // является ли особенность отрицательной
  image, // иконка
}) {
  return (
    <Feature isNegative={isNegative}>
      <FeatureHeader as="header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={image}
          alt={title}
        />
        <div>
          <FeatureOwner isNegative={isNegative}>{owner}</FeatureOwner>
          <Title size={TitleSize.SMALL} as="H3">
            {title}
          </Title>
        </div>
      </FeatureHeader>
      <FeatureText dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}

export default FeatureCard;

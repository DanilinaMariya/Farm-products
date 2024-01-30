import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import { StyledFeatureList, FeatureList, FeatureItem } from "./style";
import { AppRoute } from "/src/const";

function FeaturesList({ features }) {
  return features && features.length ? (
    <StyledFeatureList>
      <Title as="H2" className="features__title">
        Почему фермерские продукты лучше?
      </Title>
      <FeatureList>
        {features.map((feature) => (
          <FeatureItem key={features.id}>
            <FeatureCard {...feature} />
          </FeatureItem>
        ))}
      </FeatureList>
      <Button minWidth={260} link={AppRoute.BUY}>
        Купить
      </Button>
    </StyledFeatureList>
  ) : null;
}

export default FeaturesList;

import React, { useState } from "react";
import { TitleList, TitleButton, TitleText, Content } from "./style";

function Tabs({ tabs, maxContentHeiht }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TitleButton active key={item.title}>
                  <TitleText>{item.title}</TitleText>
                </TitleButton>
              );
            }
            return (
              <TitleButton key={item.title} onClick={() => setActiveTab(index)}>
                <TitleText>{item.title}</TitleText>
              </TitleButton>
            );
          })}
      </TitleList>
      <Content $maxContentHeiht={maxContentHeiht}>
        {tabs[activeTab].content}
      </Content>
    </div>
  );
}

export default Tabs;

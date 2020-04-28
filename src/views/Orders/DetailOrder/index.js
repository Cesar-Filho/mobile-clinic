import React from "react";

import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  ImageBackground,
  Content,
  TitleEvent,
  HeaderEvent,
  DateEvent,
  LabelDate,
  AreaTitle,
  TimeEvent,
  Description,
  AreaDescription,
} from "./styles";

export default function DetailEvent() {
  return (
    <Container>
      <ImageBackground
        source={{
          uri:
            "https://st2.depositphotos.com/2890953/7594/i/950/depositphotos_75944139-stock-photo-we-love-school-writing.jpg",
        }}
      >
        <Content>
          <HeaderEvent>
            <DateEvent>
              <LabelDate>25</LabelDate>
              <LabelDate fontSize={14}>JAN</LabelDate>
            </DateEvent>
            <AreaTitle>
              <TitleEvent>Pedido de exame</TitleEvent>
              <TimeEvent>
                <AntDesign name="clockcircleo" /> 12:00
              </TimeEvent>
            </AreaTitle>
          </HeaderEvent>
          <AreaDescription>
            <Description>
              Lorem ipsum dolor sit amet, consectur adipiscing elit. Ut aliquam
              magna a arcu egestas porttitor. Donec molestie porta velit, non
              mattis dui porttitor id. In ultrices a nunc.
            </Description>
          </AreaDescription>
        </Content>
      </ImageBackground>
    </Container>
  );
}

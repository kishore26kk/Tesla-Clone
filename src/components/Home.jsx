import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home(props) {
  return (
    <Container>
      <Section
      id="modelS"
        title="Model-S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        id="modelY"
        title="Model-Y"

        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        id="model3"
        title="Model-3"

        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        id="modelX"
        title="Model-X"

        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in India"
        description="Money Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        description="The roofs you need"
        backgroundImg="solar-roof.jpg"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftButton="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

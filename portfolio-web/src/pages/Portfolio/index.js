import React from "react";
import { PortfolioWrapper } from "./style";
import FirstBlock from "../../containers/FirstBlock";
import SecondBlock from "../../containers/SecondBlock";
import ThirdBlock from "../../containers/ThirdBlock";
import FourthBlock from "../../containers/FourthBlock";
import FifthBlock from "../../containers/FifthBlock";
import Footer from "../../containers/Footer";
import ScrollTop from "react-scrolltop-button";
import styled from "styled-components";

const ScrollTopButtom = styled(ScrollTop)`
&&{
    background-color: rgb(255, 255, 255, 0.7);
    color: rgb(9, 107, 166, 0.7);
    border-color: rgb(9, 107, 166, 0.7);

    &:hover {
    background-color: rgb(9, 107, 166, 1);
    color: rgb(255, 255, 255, 1);
    border-color: rgb(9, 107, 166, 1);
  }
}

`;

const Portfolio = (props) => {
  return (
    <PortfolioWrapper>
      <ScrollTopButtom
        text="para o início"
        distance={90}
        breakpoint={768}
        className="scroll-your-role"
        speed={1200}
        target={0}
      />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FifthBlock />
      <FourthBlock />
      <Footer />
    </PortfolioWrapper>
  );
};

export default Portfolio;

import React from "react";
import {
  HeaderWrapper,
  LogoWrapper,
  WhoAmI,
  Projects,
  ButtonWrapper,
  MenuContainer,
  ContactMe,
  Name,
} from "./style";
import HiddenMenu from "../HiddenMenu";

const Header = (props) => {

    return (
      <HeaderWrapper>
        <LogoWrapper>
            <Name>João Meira</Name>
        </LogoWrapper>
        <ButtonWrapper>
          <MenuContainer>
            <HiddenMenu />
          </MenuContainer>
          <WhoAmI 
          >Quem sou
          </WhoAmI>
          <Projects 
          >Projetos
          </Projects>
          <ContactMe 
          >Vamos conversar?
          </ContactMe>
        </ButtonWrapper>
      </HeaderWrapper>
    );
}

export default Header;

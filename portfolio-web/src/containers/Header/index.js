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
import HiddenMenu from "../../components/HiddenMenu";
import { Link } from "react-scroll";

const Header = (props) => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Name>João Meira</Name>
      </LogoWrapper>
      <ButtonWrapper>
        <MenuContainer>
          <HiddenMenu />
        </MenuContainer>
        <Link to="whoAmI" smooth={true} duration={600}>
          <WhoAmI>Quem sou</WhoAmI>
        </Link>
        <Link to="projects" smooth={true} duration={1000}>
          <Projects>Projetos</Projects>
        </Link>
        <Link to="contact" smooth={true} duration={1100}>
          <ContactMe>Vamos conversar?</ContactMe>
        </Link>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;

import React from "react";
import {
  FooterWrapper,
  ContentLimit,
  Title,
  Text,
  IconsWrapper,
  GitHub,
  WhatsApp,
  Linkedin,
  FinalTag,
  Copyright,
  Contact,
} from "./style";
import { footerTexto } from "../../Layout/Texts";
import { linksList } from "../../util/externalLinks";

const Footer = (props) => {

  function openPage(page) {
    switch(page){
      case "linkedin":
        return window.open(linksList.linkedin);
      case "gitHub":
        return window.open(linksList.gitHub);
      default:
        return window.open(linksList.gitHub);
    }
  }

  return (
    <FooterWrapper id="contact">
      <ContentLimit>
        <Title> {footerTexto.opening} </Title>
        <Text> {footerTexto.closing} </Text>
        <Contact> {footerTexto.email} </Contact>
        <Contact>
          {footerTexto.phone}
          <WhatsApp />
        </Contact>
        <IconsWrapper>
          <GitHub onClick={() => openPage("gitHub")}/>
          <Linkedin onClick={() => openPage("linkedin")}/>
        </IconsWrapper>
      </ContentLimit>
      <FinalTag>
        <Copyright>2020 ©João Meira</Copyright>
      </FinalTag>
    </FooterWrapper>
  );
};

export default Footer;

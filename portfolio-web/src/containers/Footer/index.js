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
      case "whatsapp":
        return window.open(linksList.whatsapp);
      default:
        return window.open(linksList.gitHub);
    }
  }

  return (
    <FooterWrapper id="contact">
      <ContentLimit>
        <Title> {footerTexto.opening} </Title>
        <Text> {footerTexto.closing} </Text>
        <Text>E-mail para contato: <Contact>{footerTexto.email} </Contact></Text>
        <IconsWrapper>
          <GitHub onClick={() => openPage("gitHub")}/>
          <WhatsApp onClick={() => openPage("whatsapp")}/>
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

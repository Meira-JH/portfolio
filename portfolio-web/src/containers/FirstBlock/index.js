import React from "react";
import {
  FirstBlockWrapper,
  ContentLimit,
  Title,
  Subtitle,
  DrawWrapper,
  Draw,
  WhatsApp,
  Linkedin,
  GitHub,
  SocialNetworks,
  IconWrapper,
} from "./style";
import iconDraw from "../../img/desenhojoao.svg";
import { opening } from "../../Layout/Texts";
import { linksList } from "../../util/externalLinks";
import { Link } from "react-scroll";

const FirstBlock = (props) => {

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
    <FirstBlockWrapper>
      <ContentLimit>
        <Title> {opening.title} </Title>
        <Subtitle> {opening.subtitle} </Subtitle>
        <DrawWrapper>
          <Draw src={iconDraw} />
        </DrawWrapper>
        <SocialNetworks>
          <IconWrapper onClick={() => openPage("gitHub")}>
            <GitHub />
          </IconWrapper>
            <IconWrapper>
              <WhatsApp onClick={() => openPage("whatsapp")}/>
            </IconWrapper>
          <IconWrapper onClick={() => openPage("linkedin")}>
            <Linkedin />
          </IconWrapper>
        </SocialNetworks>
      </ContentLimit>
    </FirstBlockWrapper>
  );
};

export default FirstBlock;

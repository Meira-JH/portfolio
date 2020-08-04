import React from "react";
import {
  FirstBlockWrapper,
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


const FirstBlock = (props) => {
  return (
    <FirstBlockWrapper>
      <Title> {opening.title} </Title>
      <Subtitle> {opening.subtitle} </Subtitle>
      <DrawWrapper>
        <Draw src={iconDraw} />
      </DrawWrapper>
      <SocialNetworks>
        <IconWrapper>
          <GitHub/>
        </IconWrapper>
        <IconWrapper>
          <WhatsApp src />
        </IconWrapper>
        <IconWrapper>
          <Linkedin src />
        </IconWrapper>
      </SocialNetworks>
    </FirstBlockWrapper>
  );
};

export default FirstBlock;

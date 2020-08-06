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
  return (
    <FirstBlockWrapper>
      <ContentLimit>
        <Title> {opening.title} </Title>
        <Subtitle> {opening.subtitle} </Subtitle>
        <DrawWrapper>
          <Draw src={iconDraw} />
        </DrawWrapper>
        <SocialNetworks>
          <IconWrapper href={linksList.gitHub}>
            <GitHub />
          </IconWrapper>
          <Link to="contact" smooth={true} duration={1100}>
            <IconWrapper>
              <WhatsApp />
            </IconWrapper>
          </Link>
          <IconWrapper href={linksList.linkedin}>
            <Linkedin />
          </IconWrapper>
        </SocialNetworks>
      </ContentLimit>
    </FirstBlockWrapper>
  );
};

export default FirstBlock;

import React from "react";
import {
  SecondBlockWrapper,
  ContentLimit,
  Title,
  Text,
  AboutMeWrapper,
  Picture,
  AboutMeTitle,
  CVButton,
  Technologies,
  TechSpan,
  TextWrapper,
} from "./style";
import { whoAmI } from "../../Layout/Texts";
import profilePic from "../../img/perfilLinkedin.png";

const SecondBlock = (props) => {
  const technologies = [
    "React.js",
    "Node.js",
    "Typescript",
    "SQL",
    "Firebase",
    "AWS",
  ];

  return (
    <SecondBlockWrapper>
        <Title>{whoAmI.title}</Title>
        <AboutMeWrapper>
          <Picture src={profilePic} />
          <TextWrapper>
          <AboutMeTitle>Sobre mim</AboutMeTitle>
          <Text> {whoAmI.text} </Text>
          <Technologies>
            {technologies.map((tech) => (
              <TechSpan> {tech} </TechSpan>
            ))}
          </Technologies>
          <CVButton>CV em pdf</CVButton>
          </TextWrapper>
        </AboutMeWrapper>
    </SecondBlockWrapper>
  );
};

export default SecondBlock;

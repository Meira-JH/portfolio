import React from "react";
import {
  ThirdBlockWrapper,
  Text,
  KnowledgeWrapper,
  KnowledgeTitle,
  Title,
  FrontEnd,
  BackEnd
} from "./style";
import { knowledge } from "../../Layout/Texts";


const ThirdBlock = (props) => {

  return (
    <ThirdBlockWrapper>
      <KnowledgeWrapper>
        <KnowledgeTitle>
          <span> {knowledge.title} </span>
        </KnowledgeTitle>
        <FrontEnd>
          <Title> {knowledge.titleFrontEnd} </Title>
          <Text> {knowledge.textFrontEnd} </Text>
        </FrontEnd>
        <BackEnd>
          <Title> {knowledge.titleBackEnd} </Title>
          <Text> {knowledge.textBackEnd} </Text>
        </BackEnd>
      </KnowledgeWrapper>
    </ThirdBlockWrapper>
  );
};

export default ThirdBlock;

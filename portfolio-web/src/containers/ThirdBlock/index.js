import React from "react";
import {
  ThirdBlockWrapper,
  Text,
  KnowledgeWrapper,
  KnowledgeTitle,
  Title,
  FrontEnd,
  BackEnd,
  Icon,
  Technologies,
} from "./style";
import { knowledge } from "../../Layout/Texts";
import iconTypescript from "./../../img/typescript.webp";
import iconAWS from "./../../img/aws.svg";
import iconMySQL from "./../../img/mysqlicon.svg";
import iconJS from "./../../img/javascripticon.png";
import iconFirebase from "./../../img/firebaseicon.png";
import iconReact from "./../../img/reacticon.png";
import iconNode from "./../../img/nodejsicon.png";
import iconJest from "./../../img/jesticon.png";
import iconRedux from "./../../img/reduxicon.webp";

const ThirdBlock = (props) => {
  const iconsList = [
      iconJS,
      iconReact,
      iconRedux,
      iconJest,
      iconNode,
      iconTypescript,
      iconMySQL,
      iconAWS,
      iconFirebase,
    ];

  const iconsRender = iconsList.map((icon, index) => (
    <Icon src={icon}/>
  ));

  return (
    <ThirdBlockWrapper>
      <KnowledgeWrapper>
        <KnowledgeTitle>
          <p>{knowledge.title}</p>
          <Technologies>{iconsRender}</Technologies>
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

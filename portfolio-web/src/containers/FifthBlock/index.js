import React from "react";
import {
  FifthBlockWrapper,
  EducationWrapper,
  Title,
  BoardTitle,
  BoardSubTitle,
  BoardText,
  Board,
  TitleWrapper,
  BoardIcon,
  CVButton
} from "./style";
import { education } from '../../Layout/Texts'
import { linksList } from "../../util/externalLinks";


const FifthBlock = (props) => {

  function openPage(page) {
    switch(page){
      case "lattes":
        return window.open(linksList.lattes);
      default:
        return window.open(linksList.lattes);
    }
  }

  const educationRender = education.map((education, index) => (
    <Board key={index}>
      <TitleWrapper>
        <BoardTitle> {education.name} </BoardTitle>
        <BoardIcon src={education.icon} />
      </TitleWrapper>
      <BoardSubTitle> {education.details} </BoardSubTitle>
      <BoardText> {education.description} </BoardText>
    </Board>
  ));

  return (
    <FifthBlockWrapper>
      <Title>Formação</Title>
      <EducationWrapper>{educationRender}</EducationWrapper>
      <CVButton onClick={() => openPage("lattes")}> Lattes </CVButton>
    </FifthBlockWrapper>
  );
};

export default FifthBlock;

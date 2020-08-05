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
import iconUfmg from "../../img/ufmg.png";
import iconUfv from "../../img/ufv.jpg";
import iconLabenu from "../../img/labenu.png";

const FifthBlock = (props) => {
  const education = [
    {
      name: "Graduação em Direito - UFV",
      details: "5 anos",
      description:
        "Graduação em Direito pela Universidade Federal de Viçosa. Dediquei boa parte do meu tempo a projetos de extensão que, através do convívio com a comunidade viçosense, deram contorno prático à minha formação.",
      icon: iconUfv,
    },
    {
      name: "Fullstack Web - Labenu",
      details: "6 meses",
      description:
        "1000 horas de desenvolvimento web, com aulas e práticas diárias. As principais linguagens/frameworks utilizados foram:  React.js, Node.js, JavaScript, Typescript, CSS, HTML, SQL; além do uso das plataformas AWS, GitHub e FireBase.",
      icon: iconLabenu,
    },
    {
      name: "Mestrado em Direito - UFMG",
      details: "2 anos",
      description:
        "Mestrado em Direito pela Universidade Federal de Minas Gerais. Para além da defesa de dissertação, ajudei na organização e apoio de eventos e Congressos. Durante o curso publiquei 4 artigos, 2 livros e realizei algumas apresentações/comunicações.",
      icon: iconUfmg,
    },
  ];

  const educationRender = education.map((education) => (
    <Board>
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
      <CVButton> Lattes </CVButton>
    </FifthBlockWrapper>
  );
};

export default FifthBlock;

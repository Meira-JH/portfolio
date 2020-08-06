import React from "react";
import {
  FourthBlockWrapper,
  ProjectsWrapper,
  Title,
  ProjectRight,
  ProjectLeft,
  IconWrapperRight,
  IconWrapperLeft,
  Icon,
  IconPhone,
  DescriptionLeft,
  DescriptionRight,
  DescriptionTitleRight,
  DescriptionSubTitleLeft,
  DescriptionSubTitleRight,
  DescriptionButton,
  DescriptionTextRight,
  DescriptionTitleLeft,
  DescriptionTextLeft,
  CVButton,
} from "./style";
import IconComputer from "../../img/spotenu-fullstack-project.web.app_(iPad).png";
import IconTablet from "../../img/printtela2.png";
import IconLaptop from "../../img/localhost_3000_(iPad) (2).png";
import { spotenu, futureEats, fourEddit } from "../../Layout/Texts";
import { linksList } from "../../util/externalLinks";

const FourthBlock = (props) => {

  function openPage(page) {
    switch(page){
      case "spotenu":
        return window.open(linksList.spotenu);
      case "futureEats":
        return window.open(linksList.futureEats);
      case "fourEddit":
        return window.open(linksList.fourEddit);
      case "gitHub":
        return window.open(linksList.gitHub);
      default:
        return window.open(linksList.gitHub);
    }
  }

  return (
    <FourthBlockWrapper id="projects">
      <ProjectsWrapper>
        <Title>Meus Projetos</Title>

        <ProjectRight>
          <IconWrapperRight>
            <Icon src={IconComputer} />
          </IconWrapperRight>
          <DescriptionRight>
            <DescriptionTitleRight> {spotenu.title} </DescriptionTitleRight>
            <DescriptionSubTitleRight>
              {spotenu.subtitle}
            </DescriptionSubTitleRight>
            <DescriptionTextRight> {spotenu.text} </DescriptionTextRight>
            <DescriptionButton onClick={() => openPage("spotenu")}>
              GitHub
            </DescriptionButton>
          </DescriptionRight>
        </ProjectRight>
        <ProjectLeft>
          <IconWrapperLeft>
            <IconPhone src={IconTablet} />
          </IconWrapperLeft>
          <DescriptionLeft>
            <DescriptionTitleLeft> {futureEats.title} </DescriptionTitleLeft>
            <DescriptionSubTitleLeft>
              {futureEats.subtitle}
            </DescriptionSubTitleLeft>
            <DescriptionTextLeft> {futureEats.text} </DescriptionTextLeft>
            <DescriptionButton onClick={() => openPage("futureEats")}>
              GitHub
            </DescriptionButton>
          </DescriptionLeft>
        </ProjectLeft>
        <ProjectRight>
          <IconWrapperRight>
            <Icon src={IconLaptop} />
          </IconWrapperRight>
          <DescriptionRight>
            <DescriptionTitleRight> {fourEddit.title} </DescriptionTitleRight>
            <DescriptionSubTitleRight>
              {fourEddit.subtitle}
            </DescriptionSubTitleRight>
            <DescriptionTextRight> {fourEddit.text} </DescriptionTextRight>
            <DescriptionButton onClick={() => openPage("fourEddit")}>
              GitHub
            </DescriptionButton>
          </DescriptionRight>
        </ProjectRight>
      </ProjectsWrapper>
      <CVButton onClick={() => openPage("giHub")}>Mais Projetos</CVButton>
    </FourthBlockWrapper>
  );
};

export default FourthBlock;

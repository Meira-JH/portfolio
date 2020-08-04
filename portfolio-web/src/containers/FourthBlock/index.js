import React from "react";
import {
  FourthBlockWrapper,
  ProjectsWrapper,
  Title,
  ProjectRight,
  ProjectLeft,
  IconWrapper,
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
} from "./style";
import IconComputer from "../../img/spotenu-fullstack-project.web.app_(iPad).png";
import IconTablet from "../../img/printtela2.png";
import IconLaptop from "../../img/localhost_3000_(iPad) (2).png";
import { spotenu, futureEats, fourEddit } from "../../Layout/Texts";

const FourthBlock = (props) => {
  return (
    <FourthBlockWrapper>
      <ProjectsWrapper>
        <Title>Meus Projetos</Title>

        <ProjectRight>
          <IconWrapper>
            <Icon src={IconComputer} />
          </IconWrapper>
          <DescriptionRight>
            <DescriptionTitleRight> {spotenu.title} </DescriptionTitleRight>
            <DescriptionSubTitleRight>
              {" "}
              {spotenu.subtitle}{" "}
            </DescriptionSubTitleRight>
            <DescriptionTextRight> {spotenu.text} </DescriptionTextRight>
            <DescriptionButton>GitHub</DescriptionButton>
          </DescriptionRight>
        </ProjectRight>
        <ProjectLeft>
          <IconWrapper>
            <IconPhone src={IconTablet} />
          </IconWrapper>
          <DescriptionLeft>
            <DescriptionTitleLeft> {futureEats.title} </DescriptionTitleLeft>
            <DescriptionSubTitleLeft>
              {" "}
              {futureEats.subtitle}{" "}
            </DescriptionSubTitleLeft>
            <DescriptionTextLeft> {futureEats.text} </DescriptionTextLeft>
            <DescriptionButton>GitHub</DescriptionButton>
          </DescriptionLeft>
        </ProjectLeft>
        <ProjectRight>
          <IconWrapper>
            <Icon src={IconLaptop} />
          </IconWrapper>
          <DescriptionRight>
            <DescriptionTitleRight> {fourEddit.title} </DescriptionTitleRight>
            <DescriptionSubTitleRight>
              {" "}
              {fourEddit.subtitle}{" "}
            </DescriptionSubTitleRight>
            <DescriptionTextRight> {fourEddit.text} </DescriptionTextRight>
            <DescriptionButton>GitHub</DescriptionButton>
          </DescriptionRight>
        </ProjectRight>
      </ProjectsWrapper>
    </FourthBlockWrapper>
  );
};

export default FourthBlock;

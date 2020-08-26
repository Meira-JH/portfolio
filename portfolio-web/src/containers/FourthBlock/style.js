import styled from "styled-components";
import { textSize } from "../../Layout/Texts";
import { device } from "../../Layout/mediaQueries";
import Button from "@material-ui/core/Button";

export const FourthBlockWrapper = styled.div`
  height: auto;
  width: 100%;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #ffff;
  padding: 49px 0;
`;

export const ProjectsWrapper = styled.div`
  width: 85%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.laptopL} {
    width: 100%;
  }
`;

export const Title = styled.span`
  color: #006ba6;
  align-self: center;
  justify-self: center;
  width: 100%;
  font-size: ${textSize.xl};
  font-weight: 300;
  text-align: center;

  @media ${device.laptop} {
    font-size: ${textSize.l};
  }
`;

export const ProjectRight = styled.div`
  width: 70%;
  height: 100%;
  min-height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 49px 0;

  @media ${device.laptop} {
    width: 85%;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    padding: 49px 0;
  }
`;

export const ProjectLeft = styled.div`
  width: 70%;
  height: 100%;
  min-height: 190px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  @media ${device.laptop} {
    width: 85%;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const IconWrapperRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 79px;

  @media ${device.mobileL} {
    justify-content: center;
    padding-right: 0px;
    padding-bottom: 20px;
  }
`;

export const IconWrapperLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 79px;

  @media ${device.mobileL} {
    justify-content: center;
    padding-left: 0px;
    padding-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: 30vw;
  max-width: 420px;
  min-width: 260px;
  box-shadow: 10px 10px 20px black;
  border-radius: 21px;
`;

export const IconPhone = styled.img`
  height: 25vw;
  max-height: 420px;
  min-height: 260px;
  box-shadow: 10px 10px 20px black;
  border-radius: 38px;

  @media ${device.desktop} {
    border-radius: 2vw;
  }
  @media ${device.laptop} {
    border-radius: 26px;
  }
`;

export const DescriptionRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.mobileL} {
    align-items: center;
  }

  @media ${device.mobileL} {
    align-items: center;
  }
`;

export const DescriptionLeft = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  @media ${device.mobileL} {
    align-items: center;
  }
`;

export const DescriptionTitleRight = styled.span`
  font-size: ${textSize.xl};
  font-weight: 700;
  text-align: left;
  color: #22303d;
  padding-bottom: 10px;

  @media ${device.laptopL} {
    font-size: ${textSize.l};
  }
`;

export const DescriptionTitleLeft = styled.span`
  font-size: ${textSize.xl};
  font-weight: 700;
  text-align: right;
  color: #22303d;
  padding-bottom: 10px;

  @media ${device.laptopL} {
    font-size: ${textSize.l};
  }
`;

export const DescriptionSubTitleRight = styled.span`
  font-size: ${textSize.l};
  font-weight: 300;
  text-align: left;
  color: #ffbc42;
  padding-bottom: 10px;

  @media ${device.laptopL} {
    padding-bottom: 5px;
    font-weight: 500;
    font-size: ${textSize.m};
  }
`;

export const DescriptionSubTitleLeft = styled.span`
  font-size: ${textSize.l};
  font-weight: 300;
  text-align: right;
  color: #ffbc42;
  padding-bottom: 10px;

  @media ${device.laptopL} {
    padding-bottom: 5px;
    font-weight: 500;
    font-size: ${textSize.m};
  }
`;

export const DescriptionTextRight = styled.span`
  font-size: ${textSize.s};
  line-height: 1.5;
  font-weight: 100;
  text-align: left;
  color: #22303d;

  @media ${device.laptop} {
    line-height: 1.4;
    padding: 1vw 0;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const DescriptionTextLeft = styled.span`
  font-size: ${textSize.s};
  line-height: 1.5;
  font-weight: 100;
  text-align: left;
  color: #22303d;

  @media ${device.laptop} {
    line-height: 1.4;
    padding: 1vw 0;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const DescriptionButton = styled(Button)`
  && {
    background-color: #ffbc42;
    color: #22303d;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 2px 2px;
    margin-top: ${textSize.s};
    font-size: ${textSize.xs};

    &:hover {
      background-color: #22303d;
      color: #ffbc42;
      font-weight: 900;
    }
    @media ${device.laptopL} {
    }
    @media ${device.mobileL} {
      margin-top: 5px;
    }
  }
`;

export const CVButton = styled(Button)`
  && {
    grid-area: Botao;
    align-self: center;
    background-color: #22303d;
    color: #ffbc42;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 2px 2px;
    font-size: ${textSize.xs};
    margin: 15px;

    &:hover {
      background-color: #ffbc42;
      color: #22303d;
      font-weight: 900;
    }
    @media ${device.laptopL} {
      align-self: center;
    }
    @media ${device.laptop} {
      align-self: center;
    }
  }
`;

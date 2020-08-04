import styled from "styled-components";
import { textSize } from "../../Layout/Texts";
import { device } from "../../Layout/mediaQueries";
import Button from "@material-ui/core/Button";

export const FourthBlockWrapper = styled.div`
  height: auto;
  width: 100%;
  background-color: #0496ff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #ffff;
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
  align-self: center;
  justify-self: center;
  width: 100%;
  font-size: ${textSize.xl};
  font-weight: 300;
  text-align: center;
  padding: 2vw;

  @media ${device.laptopL} {
    padding: 15px;
  }

  @media ${device.laptop} {
    font-size: ${textSize.l};
  }
`;

export const ProjectRight = styled.div`
  width: 80%;
  height: 100%;
  min-height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3vw 0;

  @media ${device.mobileL}{
      flex-direction: column;
      padding: 30px 0;
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
  padding: 3vw 0;

  @media ${device.mobileL}{
      flex-direction: column;
      margin: 35px 0;
  }
`;

export const IconWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 30vw;
  max-width: 420px;
  min-width: 260px;
`;

export const IconPhone = styled.img`
  height: 25vw;
  max-height: 420px;
  min-height: 260px;
`;

export const DescriptionRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.tablet}{
    padding-left: 20px;
  }
  @media ${device.mobileL}{
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

    @media ${device.mobileL}{
      align-items: center;
  }
`;

export const DescriptionTitleRight = styled.span`
  font-size: ${textSize.xl};
  font-weight: 700;
  text-align: left;
  color: black;
  padding-bottom: 5px;

  @media ${device.laptopL} {
    font-size: ${textSize.l};
  }
`;

export const DescriptionTitleLeft = styled.span`
  font-size: ${textSize.xl};
  font-weight: 700;
  text-align: right;
  color: black;
  padding-bottom: 5px;

  @media ${device.laptopL} {
    font-size: ${textSize.l};
  }
`;

export const DescriptionSubTitleRight = styled.span`
  font-size: ${textSize.l};
  font-weight: 300;
  text-align: left;
  color: black;
  padding-bottom: 10px;

  @media ${device.laptopL} {
    padding-bottom: 5px;
    font-size: ${textSize.m};
  }
`;

export const DescriptionSubTitleLeft = styled.span`
  font-size: ${textSize.l};
  font-weight: 300;
  text-align: right;
  color: black;
  padding-bottom: 10px;

  @media ${device.laptopL} {
    padding-bottom: 5px;
    font-size: ${textSize.m};
  }
`;

export const DescriptionTextRight = styled.span`
  font-size: ${textSize.m};
  font-weight: 100;
  text-align: left;

  @media ${device.laptopL} {
    padding: 1vw 0;
  }
  @media ${device.laptop} {
    padding: 1vw 0;
    font-size: ${textSize.s};
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const DescriptionTextLeft = styled.span`
  font-size: ${textSize.m};
  font-weight: 100;
  text-align: right;

  @media ${device.laptopL} {
    padding: 1vw 0;
  }

  @media ${device.laptop} {
    padding: 1vw 0;
    font-size: ${textSize.s};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const DescriptionButton = styled(Button)`
  && {
    background-color: #ffbc42;
    color: #ffff;
    width: 150px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 2px 2px;
    margin-top: 25px;
    &:hover {
      background-color: #ffff;
      color: #ffbc42;
      font-weight: 900;
    }
    @media ${device.laptopL} {
      height: 30px;
    }
    @media ${device.mobileL} {
        margin-top: 5px;
    }
  }
`;

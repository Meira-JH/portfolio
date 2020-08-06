import styled from "styled-components";
import { textSize } from "../../Layout/Texts";
import Button from "@material-ui/core/Button";
import { device } from "../../Layout/mediaQueries";

export const SecondBlockWrapper = styled.div`
  height: auto;
  max-height: 750px;
  width: 100%;
  background-color: #8f2d56;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 49px 0 79px 0;
  color: white;

  @media ${device.laptop} {
    height: auto;
    max-height: none;
    min-height: 750px;
    padding: 30px 0 49px 0;
  }
`;

export const Title = styled.span`
  width: 52%;
  font-size: ${textSize.l};
  font-weight: 300;
  text-align: center;

  @media ${device.mobileL} {
    font-size: ${textSize.m};
    font-weight: 300;
  }

  
`;

export const AboutMeWrapper = styled.div`
  width: 70%;
  padding-top: 79px;
  display: flex;
  justify-content: center;

  @media ${device.laptopL} {
    width: 90%;
    padding-top: 3vw;
  }
  @media ${device.laptop} {
    height: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  width: 35%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 30px;

  @media ${device.laptop} {
    width: 80%;
  }
`;

export const Picture = styled.img`
  grid-area: Picture;
  align-self: flex-start;
  justify-self: flex-end;
  width: 37vw;
  max-width: 370px;
  min-width: 180px;
  border-radius: 4px;

  @media ${device.laptop} {
    align-self: center;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutMeTitle = styled.span`
  grid-area: AboutMeTitle;
  align-self: flex-start;
  justify-self: flex-start;
  width: 95%;
  font-size: ${textSize.xl};
  font-weight: 500;
  text-align: left;

  @media ${device.desktop} {
    font-size: ${textSize.l};
  }

  @media ${device.laptop} {
    font-size: ${textSize.m};
    width: auto;
    align-self: center;
    justify-self: center;
    padding-top: 20px;
    height: 40px;
  }
`;

export const Text = styled.span`
  grid-area: Texto;
  align-self: center;
  justify-self: flex-start;
  width: 100%;
  font-size: ${textSize.s};
  font-weight: 50;
  text-align: left;
  padding-top: 10px;
  line-height: 1.4;

  @media ${device.laptopL} {
    padding-top: 2px;
  }

  @media ${device.laptop} {
    text-align: center;
    align-self: center;
    justify-self: center;
    line-height: 1.6;
  }

  @media ${device.mobileL} {
    text-align: left;
    align-self: flex-start;
    justify-self: flex-start;
    line-height: 1.6;
  }
`;

export const Technologies = styled.div`
  grid-area: techSpan;
  align-self: center;
  font-size: ${textSize.s};
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  line-height: 1.6;
  width: 97%;
  padding: 10px;

  @media ${device.laptopL} {
    font-size: ${textSize.s};
    align-self: flex-end;
  }

  @media ${device.laptop} {
    width: 80%;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }

  @media ${device.mobileL} {
    justify-content: flex-start;
    align-self: flex-start;
  }
`;

export const TechSpan = styled.span`
  border-left: 4px solid white;
  padding: 0 30px 0 8px;
  margin-bottom: 7px;

  @media ${device.mobileL} {
    width: 70px;
  }
`;

export const CVButton = styled(Button)`
  && {
    grid-area: Botao;
    align-self: flex-start;
    background-color: #006ba6;
    color: #ffff;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 2px 2px;
    &:hover {
      background-color: #ffff;
      color: #006ba6;
      font-weight: 900;
    }
    @media ${device.laptopL} {
      align-self: flex-start;
    }
    @media ${device.laptop} {
      align-self: center;
    }
  }
`;

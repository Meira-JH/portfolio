import styled from "styled-components";
import { textSize } from "../../Layout/Texts";
import Button from "@material-ui/core/Button";
import { device } from "../../Layout/mediaQueries";

export const SecondBlockWrapper = styled.div`
  height: 72vh;
  width: 100%;
  min-height: 600px;
  max-height: 650px;
  background-color: #8f2d56;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3vw;
  color: white;


  @media ${device.laptop} {
    height: auto;
    min-height: 750px;
  }
`;

export const ContentLimit = styled.div`
  max-width: 1500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;


  @media ${device.laptopL} {
    height: auto;
  }
`;

export const Title = styled.span`
  width: 52%;
  font-size: ${textSize.l};
  font-weight: 500;
  text-align: center;

  @media ${device.laptop} {
    font-size: ${textSize.s};
  }
`;

export const AboutMeWrapper = styled.div`
  width: 70%;
  max-height: 500px;
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 6fr 1fr;
  grid-template-rows: repeat(9, 1fr);
  grid-template-areas:
    ". Picture . AboutMeTitle ."
    ". Picture . Texto ."
    ". Picture . Texto ."
    ". Picture . Texto ."
    ". Picture . Texto ."
    ". Picture . Texto ."
    ". Picture . techSpan ."
    ". Picture . techSpan ."
    ". Picture . Botao .";

  @media ${device.laptopL} {
    max-height: none;
    height: 90%;
    width: 100%;
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

  @media ${device.laptopL} {
    font-size: ${textSize.m};
  }

  @media ${device.laptop} {
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
`;

export const Technologies = styled.div`
  grid-area: techSpan;
  align-self: center;
  font-size: ${textSize.s};
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  line-height: 1.6;
  width: 100%;
  padding: 10px;

  @media ${device.laptopL} {
    font-size: ${textSize.s};
    align-self: flex-end;
  }

  @media ${device.laptop} {
    width: 77%;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }

  @media ${device.mobileL}{
    justify-content: flex-start;
  }
`;

export const TechSpan = styled.span`
  border-left: 4px solid white;
  padding: 0 30px 0 8px;
  margin-bottom: 7px;

  @media ${device.mobileL}{
    width: 55px;
  }
`;

export const CVButton = styled(Button)`
  && {
    grid-area: Botao;
    align-self: center;
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
    align-self: center;
    margin: 2vw 0;
  }
    @media ${device.laptop} {
    align-self: center;
  }
  }
`;

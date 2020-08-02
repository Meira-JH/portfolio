import styled from "styled-components";
import { textSize } from "../../Layout/Texts";
import Button from "@material-ui/core/Button";
import { device } from "../../Layout/mediaQueries";

export const SecondBlockWrapper = styled.div`
  height: 75vh;
  min-height: 700px;
  width: 100%;
  background-color: #8f2d56;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3vw;
  color: white;

  @media ${device.laptop} {
    height: auto;
  }
`;

export const Title = styled.span`
  width: 40%;
  font-size: ${textSize.l};
  font-weight: 700;
  text-align: center;
`;

export const AboutMeWrapper = styled.div`
  width: 85%;
  height: 80%;
  padding-top: 4vw;
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
    ". Picture . Botao ."
    ". Picture . . .";

  @media ${device.laptopL} {
    height: 90%;
    width: 98%;
    padding-top: 5vw;
    grid-template-rows: repeat(10, 1fr);
    grid-template-areas:
      ". Picture . AboutMeTitle ."
      ". Picture . Texto ."
      ". Picture . Texto ."
      ". Picture . Texto ."
      ". Picture . Texto ."
      ". Picture . Texto ."
      ". Picture . techSpan . "
      ". Picture . techSpan ."
      ". Picture . Botao ."
      ". Picture . . .";
  }
  @media ${device.laptop} {
    height: auto;
    width: 100%;
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
  max-width: 475px;
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
  width: 85%;
  font-size: ${textSize.xl};
  font-weight: 700;
  text-align: left;

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
    width: 80%;
    text-align: center;
    align-self: center;
    justify-self: center;
    line-height: 1.6;
  }
`;

export const Technologies = styled.div`
  grid-area: techSpan;
  align-self: flex-start;
  font-size: ${textSize.m};
  display: flex;
  flex-wrap: wrap;
  line-height: 1.6;
  width: 100%;

  @media ${device.laptopL} {
    font-size: ${textSize.s};
  }

  @media ${device.laptop} {
    width: 77%;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    margin: 10px 0;
  }
`;

export const TechSpan = styled.span`
  border-left: 4px solid white;
  padding: 0 30px 0 8px;
  margin-bottom: 7px;
`;

export const CVButton = styled(Button)`
  && {
    grid-area: Botao;
    align-self: flex-end;
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
    margin-bottom: 10px;
  }
    @media ${device.laptop} {
    align-self: center;
    margin-bottom: 10px;
  }
  }
`;

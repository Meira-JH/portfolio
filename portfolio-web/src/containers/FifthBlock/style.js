import styled from "styled-components";
import { textSize } from "../../Layout/Texts";
import { device } from "../../Layout/mediaQueries";
import { Button } from "@material-ui/core";

export const FifthBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #006BA6;
  padding: 49px 0 79px 0;

  @media ${device.laptop} {
    padding: 30px 0 49px 0;
  }
`;

export const Title = styled.span`
  padding-bottom: 79px;
  color: #ffff;
  font-size: ${textSize.xl};
  font-weight: 300;

  @media ${device.tablet} {
    padding-bottom: 49px;
    font-size: ${textSize.l};
  }
`;

export const EducationWrapper = styled.div`
  width: 75%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.laptop} {
    width: 98%;
  }

  @media ${device.tablet} {
    width: 98%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Board = styled.div`
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
  max-width: 26%;
  width: 380px;
  min-height: 380px;
  height: auto;
  border-radius: 25px;

  @media ${device.tablet} {
    max-width: none;
    width: 65%;
    align-items: center;
    min-height: 0;
    margin-bottom: 10px;
  }
`;

export const BoardTitle = styled.span`
  width: 65%;
  font-weight: 700;
  color: #006ba6;
  font-size: ${textSize.l};

  @media ${device.laptop} {
    font-size: ${textSize.m};
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px 0;
`;

export const BoardSubTitle = styled.div`
  font-size: ${textSize.m};
  color: #8f2d56;
  font-weight: 100;
  padding: 20px 0;

  @media ${device.laptop} {
    font-size: ${textSize.s};
  }
`;

export const BoardIcon = styled.img`
  height: ${textSize.xl};
  max-width: 30%;
`;

export const BoardText = styled.div`
  width: 100%;
  font-size: ${textSize.m};

  @media ${device.laptop} {
    font-size: ${textSize.s};
  }
`;

export const CVButton = styled(Button)`
  && {
    grid-area: Botao;
    align-self: center;
    background-color: #FFBC42;
    color: #ffff;
    width: 100px;
    height: 35px;
    border-radius: 10px;
    box-shadow: 2px 2px;
    margin-top: 79px;
    font-size: ${textSize.xs}; 

    &:hover {
      background-color: #ffff;
      color: #FFBC42;
      font-weight: 900;
    }
    @media ${device.laptopL} {
      align-self: center;
      margin-top: 49px;
    }
    @media ${device.laptop} {
      align-self: center;
    }
  }
`;

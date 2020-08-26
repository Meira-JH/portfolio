import styled from "styled-components";
import { textSize } from "../../Layout/Texts";
import { device } from "../../Layout/mediaQueries";

export const ThirdBlockWrapper = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #006ba6;
  padding: 49px 0;

`;

export const KnowledgeWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr, 2fr;
  grid-template-areas:
    ". knowledgeTitle knowledgeTitle ."
    ". frontEnd backEnd .";

  @media ${device.laptopL} {
    grid-template-columns: 1fr 10fr 10fr 1fr;
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

export const KnowledgeTitle = styled.div`
  grid-area: knowledgeTitle;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  justify-content: space-around;
  justify-self: center;
  width: 100%;
  font-size: ${textSize.xl};
  font-weight: 300;
  text-align: center;
  padding-bottom: 49px;

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    justify-self: center;
    font-weight: 300;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: space-around;
    justify-content: center;
    justify-self: center;
    width: auto;
    align-self: center;
    justify-self: center;
    font-size: ${textSize.l};
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 35%;
  margin-top: 49px;

  @media ${device.laptop} {
    width: 77%;
    text-align: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
  }
`;

export const Icon = styled.img`
  width: ${textSize.xl};
  height: ${textSize.xl};
  padding: 5px;
  font-size: auto;

  @media ${device.laptop}{
    width: ${textSize.l};
    height: ${textSize.l};
  }
`;

export const FrontEnd = styled.div`
  grid-area: frontEnd;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  justify-self: center;
  margin-bottom: 35px;

  @media ${device.laptop} {
    align-self: center;
  }
`;

export const BackEnd = styled.div`
  grid-area: backEnd;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-self: center;
  margin-bottom: 35px;

  @media ${device.laptop} {
    align-self: center;
  }
`;

export const Title = styled.span`
  grid-area: Texto;
  align-self: center;
  justify-self: center;
  width: 100%;
  font-size: ${textSize.xl};
  font-weight: 700;
  text-align: center;
  line-height: 1.4;

  @media ${device.laptopL} {
    padding-top: 10px;
    font-size: ${textSize.l};
  }

  @media ${device.laptop} {
    width: 80%;
    text-align: center;
    align-self: center;
    justify-self: center;
    line-height: 1.6;
    font-size: ${textSize.m};
  }
`;

export const Text = styled.span`
  grid-area: Texto;
  align-self: center;
  justify-self: flex-start;
  width: 80%;
  font-size: ${textSize.s};
  font-weight: 50;
  text-align: center;
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

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
`;

export const KnowledgeWrapper = styled.div`
  width: 85%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    ". knowledgeTitle knowledgeTitle ."
    ". frontEnd backEnd .";

  @media ${device.laptopL} {
    height: auto;
    width: 98%;
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
  width: 85%;
  font-size: ${textSize.xl};
  font-weight: 700;
  text-align: center;

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    justify-self: center;
    font-size: ${textSize.l};
    font-weight: 900;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
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

  @media ${device.laptop} {
    width: 77%;
    text-align: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    margin: 10px 0;
  }
`;

export const Icon = styled.img`
  width: ${textSize.xl};
  height: ${textSize.xl};
  padding: 5px;
`;

export const FrontEnd = styled.div`
  grid-area: frontEnd;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  margin-bottom: 2vw;
`;

export const BackEnd = styled.div`
  grid-area: backEnd;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  margin-bottom: 2vw;
`;

export const Title = styled.span`
  grid-area: Texto;
  align-self: center;
  justify-self: center;
  width: 100%;
  font-size: ${textSize.xxl};
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

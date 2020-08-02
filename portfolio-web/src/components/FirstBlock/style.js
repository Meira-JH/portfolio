import styled from "styled-components";

export const FirstBlockWrapper = styled.div`
  height: 68vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3vw;
`;

export const Title = styled.span`
  font-size: 37px;
  font-weight: 700;
  padding: 10px;
  text-align: center;
`

export const Subtitle = styled.span`
  font-size: 23px;
  font-weight: 50;
  text-align: center;
`

export const DrawWrapper = styled.div`
  width: 11vw;
  height: 11vw;
  min-width: 160px;
  min-height: 160px;
  background-color: #0496FF;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 50%;
  margin-top: 100px;
`

export const Draw = styled.img`
  width: 9vw;
  min-width: 140px;
  border-radius: 15%;
`
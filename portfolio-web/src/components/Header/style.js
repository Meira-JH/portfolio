import styled from "styled-components";
import { device } from "../../Layout/mediaQueries";
import { textSize } from "../../Layout/Texts";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: ". LogoWrapper . . ButtonWrapper ButtonWrapper ";
  background-color: rgb(255, 255, 255);
  position: static;
  z-index: 0;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  width: 100%;
  grid-area: LogoWrapper;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
`;

export const Name = styled.p`
  color: #0496FF;
  font-size: ${textSize.l};
  font-weight: 900;

  @media ${device.laptop} {
    font-size: ${textSize.m};
  }
`


export const ButtonWrapper = styled.div`
  grid-area: ButtonWrapper;
  font-size: ${textSize.s};
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: #ff595c;
  height: 100%;

  @media ${device.laptopL} {
    font-weight: 100;
    justify-self: flex-end;
  }
`;

export const WhoAmI = styled.p`
  min-width: 80px;
  text-align: center;
  color: black;
  font-weight: 500;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    color: #bf213e;
  }

  @media ${device.laptopL} {
    font-weight: 100;
  }

  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const Projects = styled.p`
  text-align: center;
  color: #8F2D56;
  font-weight: 500;
  padding: 4px;
  margin: 8px;
  border: 2px solid #8F2D56;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #8F2D56;
    color: #ffff;
    background-color: #8F2D56;
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const ContactMe = styled.p`
  text-align: center;
  color: #0496FF;
  font-weight: 500;
  padding: 4px;
  margin: 8px;
  border: 2px solid #0496FF;
  border-radius: 6px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #0496FF;
    color: #ffff;
    background-color: #0496FF;
  }
  @media ${device.tablet} {
    display: none;
    cursor: default;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  @media ${device.tablet} {
      display: inline;
    }
`

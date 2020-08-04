import styled from "styled-components";
import iconGitHub from "./../../img/github.svg";
import iconLinkedin from "./../../img/linkedin.svg";
import iconWhatsApp from "./../../img/whatsapp.svg";

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
`;

export const Subtitle = styled.span`
  font-size: 23px;
  font-weight: 50;
  text-align: center;
`;

export const DrawWrapper = styled.div`
  width: 11vw;
  height: 11vw;
  min-width: 130px;
  min-height: 130px;
  max-height: 190px;
  background-color: #0496ff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 50%;
  margin-top: 100px;
`;

export const Draw = styled.img`
  width: 9vw;
  max-width: 190px;
  min-width: 140px;
  border-radius: 15%;
`;

export const SocialNetworks = styled.div`
  width: 15%;
  min-height: 27px;
  min-width: 160px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  width: 2vw;
  height: 2vw;
  min-height: 27px;
  min-width: 27px;
  max-width: 40px;
  max-height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px #0496FF solid;
  border-radius: 50%;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    border: 2px #d81159 solid;
  }
`;

export const GitHub = styled.img`
  background-color: #0496FF;
  mask: url(${iconGitHub});
  mask-size: 90%;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-width: 27px;
  max-width: 50px;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    background-color: #d81159;
  }
`;
export const WhatsApp = styled.img`
  background-color: #0496FF;
  mask: url(${iconWhatsApp});
  mask-size: 90%;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-width: 27px;
  max-width: 50px;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    background-color: #d81159;
  }
`;
export const Linkedin = styled.img`
  background-color: #0496FF;
  mask: url(${iconLinkedin});
  mask-size: 90%;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-width: 27px;
  max-width: 50px;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    background-color: #d81159;
  }
`;

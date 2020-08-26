import styled, { keyframes }  from "styled-components";
import { textSize } from "../../Layout/Texts";
import iconGitHub from "./../../img/github.svg";
import iconLinkedin from "./../../img/linkedin.svg";
import iconWhatsApp from "./../../img/whatsapp.svg";
import { device } from "../../Layout/mediaQueries";


export const FooterWrapper = styled.div`
    height: auto;
    min-height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #006BA6;
    color: #ffff;
`

export const ContentLimit = styled.div`
    padding: 49px 0;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-space-between;
    align-items: center;

    @media ${device.laptop} {
        width: 85%
    }

    @media ${device.tablet} {
        width: 90%
    }
`

export const Title = styled.span`
    font-size: ${textSize.xl};
    font-weight: 500;
    text-align: center;

    @media ${device.tablet} {
        font-size: ${textSize.l};
    }
`

export const Text = styled.span`
    width: 50%;
    font-size: ${textSize.s};
    font-weight: 100;
    text-align: center;
    padding-top: 49px;

    @media ${device.laptop} {
        width: 85%
    }

    @media ${device.tablet} {
        width: 90%
        
    }
`

const animation = keyframes`
  0% { 
    color: #ffff;
   }
  100% { 
    color: #FFBC42;
   }
`

export const Contact = styled.span`
    width: 50%;
    font-size: ${textSize.s};
    font-weight: 100;
    text-align: center;
    font-weight: 500;

    animation: ${animation} 2s infinite alternate ease-in-out;

`

export const IconsWrapper = styled.div`
  width: 18%;
  min-height: 40px;
  min-width: 150px;
  max-width: 300px;
  display: flex;
  align-items: center;
  padding-top: 49px;
  justify-content: space-between;
`

export const GitHub = styled.img`
  background-color: #ffff;
  mask: url(${iconGitHub});
  mask-size: 90%;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 3vw;
  height: 3vw;
  min-height: 40px;
  min-width: 40px;
  max-width: 50px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    background-color: #D81159;
  }
`;


export const Linkedin = styled.img`
  background-color: #ffff;
  mask: url(${iconLinkedin});
  mask-size: 90%;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 3vw;
  height: 3vw;
  min-height: 40px;
  min-width: 40px;
  max-width: 50px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    background-color: #D81159;
  }
`;

export const WhatsApp = styled.img`
  background-color: #ffff;
  mask: url(${iconWhatsApp});
  mask-size: 90%;
  mask-position: center;
  mask-repeat: no-repeat;
  width: 3vw;
  height: 3vw;
  min-height: 40px;
  min-width: 40px;
  max-width: 50px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  &:hover {
    background-color: #D81159;
  }
`;

export const FinalTag = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: #ffff;
    color: #006BA6;
`

export const Copyright = styled.span`
    padding-left: 52px;

    @media ${device.tablet} {
      padding-left: 40px;
    }
    @media ${device.mobileL} {
      padding-left: 20px;
    }
`
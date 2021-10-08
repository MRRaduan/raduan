import styled from "styled-components"
import Image from 'next/image'
import media from "styled-media-query"
import theme from "../../styles/theme"

export const Background = styled.main`
  margin-top: 3px;
  width: 100%;
  height: calc(100vh - 73px);
  background-color: ${theme.colors.black};
  padding: 25px 20px;

  ${media.greaterThan("medium")`
    height: calc(100vh - 30px);
    margin-top:0;
    margin-left: 3px;
    padding-left: 80px;
    background-image: url("/iron.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 60%;
  `}
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 1.5em;
  max-width: 850px; 
  ${media.greaterThan("medium")`
    margin-top: 200px;
    font-size: 62px; 
  `}
  
  .italic {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
    font-family: ${theme.typography.serif};
  }
`;

export const ComingSoon = styled.p`
  margin-top: 40px;
  font-size: 18px;
  font-family: ${theme.typography.serif};
  line-height: 1.2em;

  ${media.greaterThan("medium")`
    font-size: 32px;
  `}
`;

export const HeroImage = styled(Image)`
  position: absolute;
  top: 0;
  right:0;
`;
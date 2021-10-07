import styled from "styled-components"
import media from "styled-media-query"
import theme from "../../styles/theme"

export const Header = styled.header`
  background-color ${theme.colors.black} ;
  height: 73px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  ${media.greaterThan("medium")`
    padding: 40px;
    height: calc(100vh - 30px);
    max-width: 186px;
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const Logo = styled.svg`
  width: 83px;
  ${media.greaterThan("medium")`
    width: 111px;
  `}
`;

export const Lines = styled.div`
  display: none;
  margin-top: 54px;
  > .line {
    display: block;
    background-color: ${theme.colors.white};
    width: 28px;
    height: 1px;
    border-radius: 1px;
    margin: 8px 0;
    &:fist-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${media.greaterThan("medium")`
    display: block;
  `}
`;

export const SoliDeoGloria = styled.q`
  display: none;
  font-size: 16px;
  font-family: ${theme.typography.serif};
  font-style: italic;
  ${media.greaterThan("medium")`
    display: block;
  `}
`;

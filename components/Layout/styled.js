import styled from "styled-components"
import media from "styled-media-query"
import theme from "../../styles/theme"

export const LayoutGradient = styled.div`
  cursor: none;
  & a {
    cursor: none;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 6px;
  background: linear-gradient(
    180deg,
    ${theme.colors.blue} 0%,
    ${theme.colors.red} 75.52%,
    ${theme.colors.orange} 100%
  );
  background-attachment: fixed;
  position: relative;
  ${media.greaterThan("medium")`
    flex-direction: row;
    padding: 15px;
  `}
`

export const BorderGradient = styled.div`
  top: 0;
  left: 0;
  display: block;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100vh;
  border: solid 6px;
  border-image: linear-gradient(
      180deg,
      ${theme.colors.blue} 0%,
      ${theme.colors.red} 75.52%,
      ${theme.colors.orange} 100%
    )
    1;
  pointer-events: none;
  background: transparent;

  ${media.greaterThan("medium")`
    border-width: 15px;
  `}
`

export const LayoutChildrenWrapper = styled.div`
  width: 100%;
  ${media.greaterThan("medium")`
    margin-top: 0px;
  `}
`

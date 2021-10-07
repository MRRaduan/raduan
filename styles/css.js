import styled, { css } from "styled-components"
import theme from "./theme"
import media from "styled-media-query"

export const Section = css`
  background-color: ${theme.colors.black};
  width: 100%;
  padding: 25px 20px;

  ${media.greaterThan("tablet")`
    padding: 45px 40px;
  `}
`

export const SectionTitle = css`
  color: ${theme.colors.white};
  font-size: 18px;
  text-transform: uppercase;
  ${media.greaterThan("tablet")`
    font-size: 22px;
  `}
`

export const PersonaLinksList = styled.ul`
  display: block;
`

export const PersonaLinkItem = styled.li``

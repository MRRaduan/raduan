import styled, { css } from "styled-components"
import theme from "../../styles/theme"

const Cursor = css`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
`

export const CursorSmall = styled.div`
  ${Cursor};
  cursor: none;
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: ${theme.colors.white};
`

export const CursorCanvas = styled.canvas`
  ${Cursor};
  width: 100vw;
  height: 100vh;
  z-index: 12000;
`
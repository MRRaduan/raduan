import styled from "styled-components"
import media from "styled-media-query"
import theme from "../../styles/theme"

export const NavMenu = styled.nav``;

export const List = styled.ul`
  display: flex;  
  ${media.greaterThan("medium")`
      flex-direction: column; 
      align-items: flex-start;
  `}
 `;

export const Item = styled.li`
	font-family: ${theme.typography.sans};
  padding: 0 10px;
  &:last-child{
    padding-right: 0;
  }
  
  ${media.greaterThan("medium")`
    padding: 0;
    margin: 10px 0;
    font-size: 22px;
    line-height: 1.2em;
  `}
 `;

export const ItemLink = styled.a`
  display: block;
  text-decoration: none;
 `;

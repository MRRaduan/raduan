import React from "react"

import Head from 'next/head'
import PropTypes from "prop-types"
import Cursor from "../Cursor"
import Header from "../Header";
import GlobalStyles from "../../styles/global";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,300;1,300;1,600&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Cursor />
      <S.LayoutGradient>
        <S.BorderGradient />
        <GlobalStyles />
        <Header />
        <S.LayoutChildrenWrapper>{children}</S.LayoutChildrenWrapper>
      </S.LayoutGradient>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

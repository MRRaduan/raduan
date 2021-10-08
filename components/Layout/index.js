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
        <link
          rel="preload"
          href="/fonts/IBMPlexSans/IBMPlexSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSans/IBMPlexSans-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSans/IBMPlexSans-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSans/IBMPlexSans-LightItalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSans/IBMPlexSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSans/IBMPlexSans-BoldItalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSerif/IBMPlexSerif-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSerif/IBMPlexSerif-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSerif/IBMPlexSerif-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSerif/IBMPlexSerif-LightItalic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSerif/IBMPlexSerif-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSerif/IBMPlexSerif-BoldItalic.ttf"
          as="font"
          crossOrigin=""
        />

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

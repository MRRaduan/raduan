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
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#100B0B" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#100B0B" />
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

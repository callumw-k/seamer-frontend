import React from "react";
import { css, Global } from "@emotion/react";
import "normalize.css";
import "../css/variables.css";
import Footer from "./footer";
import Header from "./Header";
import styled from "@emotion/styled";
import GetInTouch from "./globals/get-in-touch";

import Cursor from "./cursor";
import { isMobile } from "react-device-detect";
import { breakpoints } from "./helpers";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: var(--baseFontSize);
    cursor: none;
  } /*18px*/

  body {
    cursor: none;
    background-color: var(--backgroundColor);
    color: var(--textColor);
    font-family: var(--bodyFont);
    font-weight: var(--defaultFontWeight);
    line-height: 1.75;
  }
  html *,
  body * {
    cursor: none;
  }

  /*FROM TYPESCALE*/

  p {
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.5rem 0 1.38rem;
    font-family: var(--headingFont);
    font-weight: var(--defaultHeadingWeight);
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    line-height: 1.3;
    font-size: var(--h1);
    font-weight: var(--fontBold);
  }

  h2 {
    font-size: var(--h2);
  }

  h3 {
    font-size: var(--h3);
  }

  h4 {
    font-size: var(--h4);
  }

  h5 {
    font-size: var(--h5);
  }

  small,
  .text_small {
    font-size: var(--smallText);
  }

  .small-heading {
    font-size: var(--h3);
    line-height: 1.2;
  }

  .medium-heading {
    font-size: var(--h2);
    line-height: 1.2;
  }

  .large-heading {
    font-size: var(--h1);
    line-height: 1.04;
  }
  /*END TYPESCALE*/

  .small-text {
    font-size: 16px;
    ${breakpoints.md} {
      font-size: 19px;
    }
  }
  a {
    color: var(--linkColor);
    margin-top: 0.5rem;
    display: inline-block;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .smaller-spacing {
    margin-bottom: 64px;
  }

  .large-spacing {
    margin-bottom: 120px;
    ${breakpoints.md} {
      margin-bottom: 164px;
    }
  }

  .large-spacing-centred {
    margin: 0 auto 120px auto;
    ${breakpoints.md} {
      margin: 0 auto 164px auto;
    }
  }
`;

const MainStyles = styled.main`
  background-color: white;
  padding-bottom: 4rem;
  min-height: 100vh;
`;

export default function Layout({ location, children }) {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {(!isMobile && <Cursor />) || ""}
      <Header location={location} />
      <MainStyles>{children}</MainStyles>
      <GetInTouch />
      <Footer location={location} />
    </React.Fragment>
  );
}

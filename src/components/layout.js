import React from "react";
import { css, Global } from "@emotion/react";
import "normalize.css";
import "../css/variables.css";
import Footer from "./footer";
import Header from "./Header";
import styled from "@emotion/styled";
import { breakpoints } from "./helpers";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: var(--baseFontSize);
  } /*18px*/

  body {
    background-color: var(--backgroundColor);
    color: var(--textColor);
    font-family: var(--bodyFont);
    font-weight: var(--defaultFontWeight);
    line-height: 1.75;
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
    line-height: 1.05;
    font-size: var(--h1);
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

  /*END TYPESCALE*/

  a {
    color: var(--linkColor);
    text-decoration: underline;
    margin-top: 0.5rem;
    display: inline-block;
  }
`;

const MainStyles = styled.main`
  // padding-top: 80px;
  // ${breakpoints.md} {
  //   padding-top: 90px;
  // }
`;

export default function Layout({ location, children }) {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Header />
      <MainStyles>{children}</MainStyles>
      <Footer location={location} />
    </React.Fragment>
  );
}

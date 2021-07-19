import React from "react";
import { css, Global } from "@emotion/react";
import "normalize.css";
import "../css/variables.css";
import Footer from "./footer";
import Header from "./Header";
import styled from "@emotion/styled";
import GetInTouch from "./globals/get-in-touch";
import AnimatedCursor from "react-animated-cursor";

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
    margin-top: 0.5rem;
    display: inline-block;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
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
      <AnimatedCursor
        color="29, 29, 27"
        outerSize={16}
        innerSize={16}
        innerScale={1}
      />
      <Header location={location} />
      <MainStyles>{children}</MainStyles>
      <GetInTouch />
      <Footer location={location} />
    </React.Fragment>
  );
}

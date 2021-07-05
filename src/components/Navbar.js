import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { centre_content } from "./helpers";
import ExternalLink from "./globals/externalLink";
import { css } from "@emotion/react";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: #ec564d;
  height: ${(props) => (props.isopen ? "100vh" : "0")};
  overflow: hidden;
  transition: height 1s cubic-bezier(0.14, 0.83, 0.44, 0.94);
`;

const Inner = styled.div`
  display: flex;
  padding: 12rem 0;
  justify-content: space-between;
  ${centre_content.xxxl};
  height: 100vh;
`;

const Nav = styled.nav`
  display: grid;
  @media screen and (max-height: 768px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 10rem;
  }
  a {
    color: var(--black);
    font-size: var(--biggerHeading);
  }
`;
const SocialLinks = styled.div`
  align-self: flex-start;
`;
export default function Navbar({ isOpen }) {
  return (
    <Wrapper id="header" isopen={isOpen ? 1 : 0}>
      <Inner>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        <SocialLinks>
          <ExternalLink
            text="Facebook"
            url="https://facebook.com"
            extendedStyle={css`
              font-size: var(--h3);
            `}
          />
        </SocialLinks>
      </Inner>
    </Wrapper>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { breakpoints, centre_content } from "./helpers";
import ExternalLink from "./globals/externalLink";
import { css } from "@emotion/react";
import NavLinks from "./globals/nav-links";
import SocialLinks from "./globals/social-links";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: #ec564d;
  height: ${(props) => (props.isopen ? "100vh" : "0")};
  overflow: hidden;
  transition: height 1s cubic-bezier(0.14, 0.83, 0.44, 0.94);
`;

const Inner = styled.div`
  display: flex;
  padding: 100px 0 2rem;
  justify-content: space-between;
  ${centre_content.xxxl};
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  // On desktop, allow the links to break once they hit the padding at the bottom.
  ${breakpoints.md} {
    flex-flow: column wrap;
  }
  //
  a {
    color: var(--black);
    font-size: var(--biggerHeading);
    margin-right: 2rem;
  }
`;
const Socials = styled.aside`
  display: flex;
  flex-direction: column;
  // Hide the social links on mobile
  height: 0;
  opacity: 0;
  visibility: hidden;
  //
  align-self: flex-start;
  margin-right: 20vw;
  // Show the social links on tablet and higher
  ${breakpoints.md} {
    height: auto;
    visibility: visible;
    opacity: 1;
  }
  //
  a {
    font-size: var(--h3);
  }
`;
export default function Navbar({ isOpen }) {
  return (
    <Wrapper id="header" isopen={isOpen ? 1 : 0}>
      <Inner>
        <Nav aria-label="Primary Nav">
          {/*<Link to="/">Home</Link>*/}
          <NavLinks />
        </Nav>
        <Socials aria-label="Social Links">
          <SocialLinks />
        </Socials>
      </Inner>
    </Wrapper>
  );
}

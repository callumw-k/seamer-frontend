import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { breakpoints, centre_content } from "./helpers";
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
  padding: 10rem 0 2rem;
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
const SocialLinks = styled.div`
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
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        <SocialLinks>
          <p
            css={css`
              margin-bottom: 0;
            `}
          >
            Social
          </p>
          <ExternalLink
            text="Facebook"
            url="https://www.facebook.com/Seamer-Design-103537193025995"
          />
          <ExternalLink
            text="Instagram"
            url="https://www.instagram.com/seamer_design/"
          />
          <ExternalLink
            text="LinkedIn"
            url="https://www.linkedin.com/company/seamer-design"
          />
        </SocialLinks>
      </Inner>
    </Wrapper>
  );
}

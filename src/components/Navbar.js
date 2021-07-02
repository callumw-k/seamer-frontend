import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { breakpoints, centre_content } from "./helpers";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: #ec564d;
  height: ${(props) => (props.isOpen ? "100vh" : "0")};
  overflow: hidden;
  transition: height 1s cubic-bezier(0.14, 0.83, 0.44, 0.94);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  ${centre_content.xxxl};
  height: 100vh;
`;

const Nav = styled.nav`
  display: grid;
  @media screen and (max-height: 1000px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 10rem;
  }
  a {
    color: var(--black);
    font-size: var(--biggerHeading);
  }
`;
export default function Navbar({ isOpen }) {
  // function checkHeight(payload) {
  //   console.log(payload);
  // }

  return (
    <Wrapper id="header" isOpen={isOpen}>
      <Inner>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/news">News</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </Inner>
    </Wrapper>
  );
}

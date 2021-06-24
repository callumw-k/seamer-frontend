import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { centre_content, fontMarginReset } from "./helpers";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-top: 2rem;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  ${centre_content.md};
`;

const Nav = styled.nav`
  display: flex;
  a {
    padding: 1rem;
    ${fontMarginReset}
  }
`;

const Navbar = () => {
  const [isVisivle, setIsVisible] = useState(true);
  function listenToScroll() {
    let lastpos = 0;
    let curpos = window.pageYOffset;
    if (lastpos - curpos < 0) {
      console.log("yeet");
    }
    lastpos = curpos;
  }
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      <Inner>
        <div
          css={css`
            margin-right: auto;
          `}
        >
          <StaticImage
            css={css`
              max-width: 150px;
            `}
            src="../images/logo/seamer_logo.png"
            alt="Seamer Design logo."
            quality={100}
          />
        </div>

        <Nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
        </Nav>
      </Inner>
    </Wrapper>
  );
};

export default Navbar;

import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { centre_content, fontMarginReset } from "./helpers";

const Wrapper = styled.div`
  padding: 2rem 0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0.25rem 1rem;
  ${centre_content.lg};
`;

const Nav = styled.nav`
  display: flex;
  a {
    padding: 1rem;
    ${fontMarginReset}
  }
`;

const Navbar = () => {
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
        </Nav>
      </Inner>
    </Wrapper>
  );
};

export default Navbar;

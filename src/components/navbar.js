import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { breakpoints, centre_content, fontMarginReset } from "./helpers";
import MenuIcon from "../images/svgs/menu_icon.svg";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-top: 2rem;
`;

const Inner = styled.div`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: 250ms opacity ease-in;
  background-color: white;
  display: grid;
  align-items: center;
  padding: 2rem 2rem;
  ${centre_content.md};
  ${breakpoints.md} {
    grid-template-columns: 1fr auto;
  }
`;

const imageVisible = `
    opacity: 1; 
    height: auto;
    width: auto;
    visibility: visible;
`;

const imageInvisible = `
    opacity: 0;
    height: 0;
    width: 0;
    visibility: hidden;
`;

const ImageNavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .first__image,
  .second__image {
    transition: opacity 500ms ease-in;
  }
  // Check and see if the second logo is visible. if so, remove first image and set second image
  .first__image {
    ${(props) => (props.isSecondLogo ? imageInvisible : imageVisible)}
  }
  .second__image {
    ${(props) => (props.isSecondLogo ? imageVisible : imageInvisible)};
  }
  .menu__icon {
    width: 40px;
    margin-left: auto;
    ${breakpoints.md} {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  height: 0;
  visibility: hidden;
  opacity: 0;
  ${(props) =>
    props.isNavVisibile
      ? "height: auto; visibility: visible; opacity: 1;padding: 2rem 0;"
      : ""};
  flex-direction: column;
  align-items: center;

  ${breakpoints.md} {
    flex-direction: row;
    height: auto;
    opacity: 1;
    visibility: visible;
  }
  a {
    padding: 1rem;
    ${fontMarginReset}
  }
`;

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSecondLogoVisible, setSecondLogo] = useState(false);
  const [isNavVisible, setNavVisible] = useState(false);

  let scrollPos = 0;

  function listenToScroll() {
    if (document.body.getBoundingClientRect().top > scrollPos)
      setIsVisible(true);
    else {
      setIsVisible(false);
    }
    if (document.body.getBoundingClientRect().top < -500) {
      setSecondLogo(true);
    } else {
      setSecondLogo(false);
    }
    scrollPos = document.body.getBoundingClientRect().top;
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      <Inner isVisible={isVisible}>
        <ImageNavWrapper isSecondLogo={isSecondLogoVisible}>
          <StaticImage
            className=" first__image"
            src="../images/logo/seamer_logo.png"
            alt="Seamer Design logo."
            quality={100}
            width={150}
          />
          <StaticImage
            className="second__image"
            src="../images/logo/logo_small.png"
            alt=""
            width={50}
          />
          <MenuIcon
            className="menu__icon"
            onClick={() => setNavVisible(!isNavVisible)}
          />
        </ImageNavWrapper>

        <Nav isNavVisibile={isNavVisible}>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </Inner>
    </Wrapper>
  );
};

export default Navbar;

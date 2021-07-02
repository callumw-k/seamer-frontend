import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { centre_content } from "./helpers";
import Navbar from "./Navbar";
import { StaticImage } from "gatsby-plugin-image";
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";
import SeamerLogo from "../images/svgs/seamer_logo.svg";
import { Link } from "gatsby";
const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-top: 0.5rem solid #ec564d;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  ${centre_content.xxxl};
`;

const Menu = styled(MenuIcon)`
  width: 40px;
  height: 40px;
  margin-left: auto;
  cursor: pointer;
  transition: 500ms ease-in color;
  color: ${(props) => (props.isOpen ? "white" : "var(--black)")};
`;

const Logo = styled(SeamerLogo)`
  width: 200px;
  opacity: ${(props) => (props.isLogoVisible ? " 100" : "0")};
  transition: 250ms opacity ease-in, 250ms fill ease-in;
  fill: ${(props) => (props.isOpen ? "white" : "black")};
`;

const Header = ({ location }) => {
  const [isOpen, setOpen] = useState(false);
  const [isLogoVisible, setLogoVisible] = useState(true);

  let _isMounted = useRef(null);

  useEffect(() => {
    _isMounted.current = true;
    window.addEventListener("scroll", checkScroll);
    return () => {
      _isMounted.current = false;
      window.addEventListener("scroll", checkScroll);
    };
  }, []);

  const checkScroll = (event) => {
    let scheduled = null;
    if (!scheduled && _isMounted.current) {
      setTimeout(() => {
        if (window.pageYOffset > 50) {
          setLogoVisible(false);
        } else {
          setLogoVisible(true);
        }
        scheduled = null;
      }, 100);
      scheduled = event;
    }
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Inner>
          <Link to="/">
            <Logo isOpen={isOpen} isLogoVisible={isLogoVisible} />
          </Link>
          <Menu isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
        </Inner>
      </Wrapper>
      <Navbar isOpen={isOpen} />
    </React.Fragment>
  );
};

export default Header;

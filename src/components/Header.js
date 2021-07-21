import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { centre_content } from "./helpers";
import Navbar from "./Navbar";
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";
import SeamerLogo from "../images/svgs/seamer_logo.svg";
import { Link } from "gatsby";
import NavIcon from "./nav-icon";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border-top: 0.5rem solid #ec564d;
  background-color: transparent;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  ${centre_content.xxxl};
  background-color: transparent;
`;

const Menu = styled(MenuIcon)`
  width: 40px;
  height: 40px;
  margin-left: auto;
  transition: 500ms ease-in color;
  color: ${(props) => (props.isOpen ? "white" : "var(--black)")};
  mix-blend-mode: difference;
  -webkit-filter: invert(0.4);
`;

const Logo = styled(SeamerLogo)`
  width: 200px;
  opacity: ${(props) => (props.islogovisible ? " 100" : "0")};
  transition: 250ms opacity ease-in, 250ms fill ease-in;
  fill: ${(props) => (props.isopen ? "white" : "black")};
`;

const Header = ({ location }) => {
  const [isOpen, setOpen] = useState(false);
  const [isLogoVisible, setLogoVisible] = useState(1);

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
          setLogoVisible(0);
        } else {
          setLogoVisible(1);
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
            <Logo isopen={isOpen ? 1 : 0} islogovisible={isLogoVisible} />
          </Link>
          <Menu
            className="menu-icon"
            isopen={isOpen ? 1 : 0}
            onClick={() => setOpen(!isOpen)}
          />
          <NavIcon isopen={isOpen ? 1 : 0} onClick={() => setOpen(!isOpen)} />
        </Inner>
      </Wrapper>
      <Navbar isOpen={isOpen} />
    </React.Fragment>
  );
};

export default Header;

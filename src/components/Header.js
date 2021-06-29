import React, { useState } from "react";
import styled from "@emotion/styled";
import { centre_content } from "./helpers";
import MenuIcon from "../images/svgs/menu_icon.svg";
import Navbar from "./Navbar";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-top: 0.5rem solid var(--orange);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  ${centre_content.xxxl};
`;

const Menu = styled(MenuIcon)`
  width: 30px;
  margin-left: auto;
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Wrapper>
        <Inner>
          <StaticImage
            src="../images/logo/logo_small.png"
            alt="Seamer Design logo"
            imgStyle={{ objectFit: "contain" }}
            width={50}
          />
          <Menu onClick={() => setOpen(!isOpen)} />
        </Inner>
      </Wrapper>
      <Navbar isOpen={isOpen} />
    </React.Fragment>
  );
};

export default Header;

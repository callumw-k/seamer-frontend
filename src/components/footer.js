import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "./helpers";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
} from "react-icons/fa";
import NavLinks from "./globals/nav-links";
import SocialLinks from "./globals/social-links";

const Wrapper = styled.footer`
  background-color: var(--orange);
  position: fixed;
  bottom: 0;
  height: 100vh;
  overflow-x: hidden;
  width: 100%;
  left: 0;
  z-index: -1;
`;

const Container = styled.div`
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  ${breakpoints.md} {
    justify-content: center;
  }
  ${centre_content.xxl};
`;

const ContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
  }
`;

const FooterLeft = styled.div`
  h3 {
    font-size: var(--biggerHeading);
  }

  &,
  a {
    color: black;
  }
`;

const FooterRight = styled.div`
  display: flex;
  margin: var(--marginSpacingMD_NC);
  a {
    font-weight: bold;
    font-size: var(--h4);
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  h4 {
    margin-top: 1rem;
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  & svg {
    fill: black;
    margin: 0 0.5rem;
  }
`;

const SmallPrint = styled.div``;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <ContainerInner>
          <FooterLeft>
            <h3>
              We Make <br />
              Brand Work
            </h3>
            {/*<InternalLink text="Get in touch" url="/contact" />*/}
            <Details>
              {/*<h3>Our details.</h3>*/}
              <div>
                <h4>Melbourne</h4>
                <p>Level 23, Tower 5, 727 Collins Street Docklands VIC 3008</p>
                <p>
                  Phone <a href="tel:0390089838">03 9008 9838</a>
                </p>
              </div>
              <div>
                <h4>Ballarat</h4>
                <p>
                  Suite 8, 34A Doveton Street Nth <br /> Ballarat, VIC, 3350
                </p>
                <p>
                  Phone <a href="tel:03 5324 2288">03 5324 2288</a>
                </p>
              </div>
            </Details>
            {/*<div>*/}
            {/*  <IconWrapper>*/}
            {/*    <a href="https://www.facebook.com/Seamer-Design-103537193025995">*/}
            {/*      <Facebook size={30} />*/}
            {/*    </a>*/}
            {/*    <a href="https://www.instagram.com/seamer_design/">*/}
            {/*      <Instagram size={30} />*/}
            {/*    </a>*/}
            {/*  </IconWrapper>*/}
            {/*</div>*/}
          </FooterLeft>
          <FooterRight>
            <Nav>
              <p>Arround</p>
              <NavLinks />
            </Nav>
            <Socials>
              <SocialLinks />
            </Socials>
          </FooterRight>
        </ContainerInner>
        <SmallPrint>
          <p>© Seamer Design 2021</p>
        </SmallPrint>
      </Container>
    </Wrapper>
  );
}

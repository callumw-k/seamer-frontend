import React from "react";
import styled from "@emotion/styled";
import Form from "./globals/Form";
import { breakpoints, centre_content } from "./helpers";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
} from "react-icons/fa";

const Wrapper = styled.footer`
  background-color: var(--black);
  position: fixed;
  bottom: 0;
  height: 100vh;
  overflow-x: hidden;
  width: 100%;
  left: 0;
  z-index: -1;
  ${breakpoints.lg} {
    display: flex;
  }
`;
const Inner = styled.div`
  ${breakpoints.lg} {
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  ${centre_content.lg};
`;
const Details = styled.div`
  &,
  a {
    color: white;
  }
  h4 {
    text-decoration: underline;
  }
  ${breakpoints.md} {
    margin-left: 2rem;
  }
`;
const FooterSocials = styled.div`
  grid-area: 2/1/2/3;
  display: flex;
  flex-direction: column;
`;
const IconWrapper = styled.div`
  margin: 2rem auto 0 auto;
  & > svg {
    fill: white;
    margin: 0 0.5rem;
  }
`;
export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Form />
        <Details>
          <h3>Our details.</h3>
          <h4>Melbourne</h4>
          <p>Level 23, Tower 5, 727 Collins Street Docklands VIC 3008</p>
          <p>
            Phone <a href="tel:0390089838">03 9008 9838</a>
          </p>
          <h4>Ballarat</h4>
          <p>
            Suite 8, 34A Doveton Street Nth <br /> Ballarat, VIC, 3350
          </p>
          <p>
            Phone <a href="tel:03 5324 2288">03 5324 2288</a>
          </p>
        </Details>
        <FooterSocials>
          <StaticImage
            src="../images/seamer_logo.png"
            alt=""
            quality={100}
            width={300}
            style={{ margin: "0 auto" }}
            imgStyle={{ objectFit: "contain" }}
          />
          <IconWrapper>
            <Facebook size={30} /> <Instagram size={30} />
          </IconWrapper>
        </FooterSocials>
      </Inner>
    </Wrapper>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "./helpers";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
} from "react-icons/fa";
import InternalLink from "./globals/internalLink";

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
  &,
  a {
    color: white;
  }
  ${breakpoints.max_md} {
    padding: 4rem 0;
  }
  ${breakpoints.lg} {
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 60% 40%;
  }
  ${centre_content.xxl};
`;

const ContactSection = styled.div`
  h3 {
    font-size: var(--jumboHeading);
  }
  a {
    font-size: var(--h3);
  }
`;

const Details = styled.div`
  margin: var(--marginSpacingLarge);
  ${breakpoints.md} {
    margin: 0 0 0 2rem;
  }
  h4 {
    margin-top: 1rem;
    text-decoration: underline;
  }
`;
const DetailsInner = styled.div`
  ${breakpoints.md} {
    display: flex;
    & > div {
      flex-basis: 50%;
    }
    & > div:first-of-type {
      margin-right: 2rem;
    }
  }
`;
const FooterSocials = styled.div`
  grid-area: 2/1/2/3;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  .footer_image {
    ${breakpoints.max_md} {
      max-width: 200px;
    }
  }
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
        <ContactSection>
          <h3>
            We Make <br />
            Brand Work
          </h3>
          <InternalLink text="Get in touch" url="/contact" />
        </ContactSection>
        <Details>
          <h3>Our details.</h3>
          <DetailsInner>
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
          </DetailsInner>
        </Details>
        <FooterSocials>
          <StaticImage
            src="../images/seamer_logo.png"
            alt=""
            quality={100}
            className="footer_image"
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

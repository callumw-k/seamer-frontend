import React from "react";
import styled from "@emotion/styled";
import { centre_content } from "./helpers";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
} from "react-icons/fa";

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
const Inner = styled.div`
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: var(--biggerHeading);
  }

  &,
  a {
    color: black;
  }

  ${centre_content.xxl};
`;

const Details = styled.div`
  h4 {
    margin-top: 1rem;
    text-decoration: underline;
  }
`;
const DetailsInner = styled.div`
  margin: var(--marginSpacingMedium);
`;

const IconWrapper = styled.div`
  & svg {
    fill: black;
    margin: 0 0.5rem;
  }
`;
export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <h3>
          We Make <br />
          Brand Work
        </h3>
        {/*<InternalLink text="Get in touch" url="/contact" />*/}
        <Details>
          {/*<h3>Our details.</h3>*/}
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
        <div>
          <IconWrapper>
            <a href="https://www.facebook.com/Seamer-Design-103537193025995">
              <Facebook size={30} />
            </a>
            <a href="https://www.instagram.com/seamer_design/">
              <Instagram size={30} />
            </a>
          </IconWrapper>
        </div>
      </Inner>
    </Wrapper>
  );
}

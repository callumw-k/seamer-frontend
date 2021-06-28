import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../helpers";

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  ${centre_content.md_no_margin};
  margin: 4rem auto;
  ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-weight: var(--fontExtraBold);
    font-size: var(--biggerHeading);
    ${breakpoints.md} {
      margin-right: auto;
    }
  }

  h2 {
    font-size: var(--h3);
    flex-basis: 60%;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <h1>Hello.</h1>
      <h2>
        We’d love to hear from you. Get in touch and let’s make brand work,
        together.
      </h2>
    </HeroSection>
  );
}

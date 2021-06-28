import React from "react";
import styled from "@emotion/styled";
import { breakpoints, centre_content, fontMarginReset } from "../helpers";

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => (props.width === "md" ? centre_content.md : centre_content.lg)};
  margin: 4rem auto;
  ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-weight: var(--fontExtraBold);
    font-size: var(--biggerHeading);
    ${fontMarginReset};
    ${breakpoints.md} {
      margin-right: auto;
    }
  }

  h2 {
    ${fontMarginReset};
    font-size: var(--h4);
    max-width: 60%;
  }
`;

export default function Hero({ title, description, width }) {
  return (
    <HeroSection width={width}>
      <h1>{title}</h1>
      <h2> {description}</h2>
    </HeroSection>
  );
}

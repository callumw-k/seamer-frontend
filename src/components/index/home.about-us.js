import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../helpers";
import StrategyIcon from "../../images/svgs/communications-icon.svg";
import CommunicationsIcon from "../../images/svgs/strategy-icon.svg";
import Digital from "../../images/svgs/digital-icon.svg";
//Wrapper styles
const wrapperStyles = css`
  ${centre_content.lg};
  margin: var(--marginSpacingLarge);
`;

//Main heading styles.
const mainH2Styles = css`
  font-weight: var(--fontBold);
`;

//HR Divider between main heading and expertise lists
// const hrStyles = css`
//   border: 2px solid black;
//   width: 4rem;
//   margin: 2rem 0;
// `;

//Grid Wrapper
const GridWrapper = styled.div`
  display: grid;
  overflow: auto;
  padding: 4rem 0 0 0;
  grid-template-columns: repeat(3, 80vw);
  grid-gap: 2rem;
  ${breakpoints.md} {
    grid-template-columns: repeat(3, 30%);
    justify-content: space-between;
  }
`;

//Grid Items
const GridItem = styled.div`
  background-color: #f3f0ee;
  padding: 2rem;
  h3 {
    margin-top: 0;
  }
  ul {
    padding: 0 0 0 1.5rem;
  }
  li {
    margin: 0.5rem 0;
  }
  ${breakpoints.md} {
    padding: 0;
    background-color: white;
  }
`;

const IconStyles = css`
  width: 80px;
  margin-bottom: 2rem;
`;

//Styles for scroll text on mobile.
const scollStyles = css`
  font-size: var(--smallText);
  color: var(--orange);
  font-weight: var(--fontExtraBold);
  margin: 0.25rem 0 0 0;
  &:after {
    content: "\\2192";
    margin-left: 0.25rem;
  }
  ${breakpoints.md} {
    display: none;
  } ;
`;

const expertiseInfo = {
  brand: {
    title: "Brand",
    attributes: [
      "BRAND ARCHITECTURE",
      "BRAND GUIDELINES",
      "BRAND IDENTITY",
      "BRAND WORKSHOPS",
      "MESSAGING STRATEGY",
      "SOCIAL STRATEGY",
      "STAFF ACTIVATIONS",
    ],
  },
  communications: [
    "CONTENT CREATION",
    "DIGITAL MARKETING",
    "EMAIL",
    "PACKAGING",
    "PRINT AND OUTDOOR",
    "VIDEO PRODUCTION",
    "WEBSITES",
  ],
  digital: [
    "AUTOMATION",
    "DIGITAL DESIGN SYSTEMS",
    "PRODUCT DESIGN",
    "USER EXPERIENCE DESIGN",
    "USER INTERFACE DESIGN",
    "USER RESEARCH",
    "WEB DEVELOPMENT",
  ],
};

export default function HomeAboutUs() {
  return (
    <section css={wrapperStyles}>
      <h2 css={mainH2Styles}>
        Seamer Design is your creative agency partner & for the past twenty
        years we've been stitching brands together.
      </h2>
      {/*<hr css={hrStyles} />*/}
      <GridWrapper>
        <GridItem>
          <CommunicationsIcon css={css(IconStyles)} />
          <h3>{expertiseInfo.brand.title}</h3>
          <ul>
            {expertiseInfo.brand.attributes.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </GridItem>
        <GridItem>
          <Digital css={css(IconStyles)} />
          <h3>Digital</h3>
          <ul>
            {expertiseInfo.digital.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </GridItem>
        <GridItem>
          <StrategyIcon css={css(IconStyles)} />
          <h3>Communications</h3>
          <ul>
            {expertiseInfo.communications.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </GridItem>
      </GridWrapper>
      <p css={scollStyles}>Scroll</p>
    </section>
  );
}

import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../helpers";
import { StaticImage } from "gatsby-plugin-image";
//Wrapper styles
const wrapperStyles = css`
  ${centre_content.lg};
  margin: var(--marginSpacingLarge);
`;

//Main heading styles.
const mainH2Styles = css`
  font-weight: var(--fontBold);
`;

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

const data = {
  brand: {
    title: "Branding",
    attributes: [
      "Brand Audit",
      "Brand Strategy",
      "Brand Name",
      "Identity Design",
      "Style Guides",
      "Brand Activation",
    ],
  },
  design: [
    "Stationery",
    "Publications",
    "Packaging",
    "Promotion",
    "Way-finding",
    "Advertising",
    // "Exhibitions",
  ],
  digital: [
    "Website Design",
    "Website Development",
    "Animation",
    "Social Media",
    "Front-end Development",
    "Website Maintenance",
    // "Digital Banners",
    // "EDM's",
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
          <StaticImage
            src="../../images/pages/home/question-icon.png"
            alt="Branding"
            layout="constrained"
            height={100}
            quality={100}
            style={{ marginBottom: "2rem" }}
          />
          <h3>Brand</h3>
          <ul>
            {data.brand.attributes.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </GridItem>
        <GridItem>
          <StaticImage
            src="../../images/pages/home/pen.png"
            alt="Design"
            layout="constrained"
            height={100}
            quality={100}
            style={{ marginBottom: "2rem" }}
          />
          <h3>Design</h3>
          <ul>
            {data.design.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </GridItem>
        <GridItem>
          <StaticImage
            src="../../images/pages/home/mouse-pointer.png"
            alt="Digital"
            layout="constrained"
            height={100}
            quality={100}
            style={{ marginBottom: "2rem" }}
          />
          <h3>Digital</h3>
          <ul>
            {data.digital.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </GridItem>
      </GridWrapper>
      <p css={scollStyles}>Scroll</p>
    </section>
  );
}

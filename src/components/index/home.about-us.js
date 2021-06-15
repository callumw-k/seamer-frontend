import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../helpers";

export default function HomeAboutUs() {
  //Wrapper styles
  const wrapperStyles = css`
    ${centre_content.md}
  `;

  //Main heading styles.
  const mainH2Styles = css`
    font-weight: var(--fontBold);
  `;

  //HR Divider between main heading and expertise lists
  const hrStyles = css`
    border: 2px solid black;
    width: 4rem;
    margin: 2rem 0;
  `;

  //Grid Wrapper
  const ExpertiseGridWrapper = styled.div`
    display: grid;
    overflow: auto;
    grid-template-columns: repeat(3, 80vw);
    grid-gap: 2rem;
    ${breakpoints.md} {
      grid-template-columns: repeat(3, 30%);
      justify-content: space-between;
    }
  `;

  //Grid Items
  const ExpertiseGridItem = styled.div`
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

  return (
    <section css={wrapperStyles}>
      <h2 css={mainH2Styles}>
        Seamer Design is your creative agency partner & for the past twenty
        years we've been stitching brands together.
      </h2>
      <hr css={hrStyles} />
      <ExpertiseGridWrapper>
        <ExpertiseGridItem>
          <h3>{expertiseInfo.brand.title}</h3>
          <ul>
            {expertiseInfo.brand.attributes.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </ExpertiseGridItem>
        <ExpertiseGridItem>
          <h3>Communications</h3>
          <ul>
            {expertiseInfo.communications.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </ExpertiseGridItem>
        <ExpertiseGridItem>
          <h3>Digital</h3>
          <ul>
            {expertiseInfo.digital.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </ExpertiseGridItem>
      </ExpertiseGridWrapper>
      <p css={scollStyles}>Scroll</p>

      {/*<div*/}
      {/*  css={css`*/}
      {/*    text-align: center;*/}
      {/*  `}*/}
      {/*>*/}
      {/*  <InternalLink*/}
      {/*    url={"/contact"}*/}
      {/*    text={"Approach"}*/}
      {/*    extendedStyle={css`*/}
      {/*      font-size: var(--h3);*/}
      {/*    `}*/}
      {/*  />*/}
      {/*</div>*/}
    </section>
  );
}

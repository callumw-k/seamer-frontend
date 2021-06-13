import React from "react";
import { css } from "@emotion/react";
import { breakpoints, centre_content } from "../helpers";
import InternalLink from "../globals/internalLink";
import "../../css/variables.css";

export default function HomeAboutUs() {
  const h2Styling = css`
    text-align: center;
    ${centre_content.md}
  `;

  const expertiseWrapper = css`
    > div {
      display: grid;
      text-align: left;
      ${breakpoints.md} {
        grid-template-columns: repeat(3, 30%);
        justify-content: space-between;
      }
    }
    h3 {
      font-size: var(--h4);
    }
  `;

  const expertiseInfo = {
    brand: [
      "BRAND ARCHITECTURE",
      "BRAND GUIDELINES",
      "BRAND IDENTITY",
      "BRAND WORKSHOPS",
      "MESSAGING STRATEGY",
      "SOCIAL STRATEGY",
      "STAFF ACTIVATIONS",
    ],
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
    <section css={h2Styling}>
      <h2
        css={css`
          font-weight: var(--fontRegular);
        `}
      >
        Seamer Design is your creative agency partner & for the past twenty
        years we've been stitching brands together.
      </h2>

      <div css={expertiseWrapper}>
        <h2>Our Expertise</h2>
        <div>
          <div>
            <h3>Brand & Strategy</h3>
            <ul>
              {expertiseInfo.brand.map((listItem) => (
                <li>{listItem}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Communications</h3>
            <ul>
              {expertiseInfo.communications.map((listItem) => (
                <li>{listItem}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Digital</h3>
            <ul>
              {expertiseInfo.digital.map((listItem) => (
                <li>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <InternalLink
        url={"/contact"}
        text={"Approach"}
        extendedStyle={css`
          font-size: var(--h3);
        `}
      />
    </section>
  );
}

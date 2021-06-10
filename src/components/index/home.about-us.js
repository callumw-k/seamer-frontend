import React from "react";
import { css } from "@emotion/react";
import { centre_content } from "../helpers";
import InternalLink from "../globals/internalLink";
import "../../css/variables.css";

export default function HomeAboutUs() {
  const h2Styling = css`
    text-align: center;
    ${centre_content.md}
  `;

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

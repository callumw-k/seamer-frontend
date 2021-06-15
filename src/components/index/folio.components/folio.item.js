import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../../helpers";

const ContentWrapper = styled.div`
  ${breakpoints.max_md} {
    padding: 0 5%;
  }
  ${(props) => (props.single ? "" : "padding: 0 5%;")}
`;

const smallTextStyling = css`
  font-size: var(--smallText);
  margin-bottom: 0.5rem;
`;
const titleStyling = css`
  margin-top: 0;
  margin-bottom: 1rem;
`;
const subtitleStyling = css``;

export default function FolioItem({ imageUrl, type, title, subtitle, single }) {
  return (
    <div>
      <GatsbyImage quality={100} image={imageUrl} alt="Yeet" />
      <ContentWrapper single={single}>
        <p css={smallTextStyling}>{type}</p>
        <h3 css={titleStyling}>{title}</h3>
        <p css={subtitleStyling}>{subtitle}</p>
      </ContentWrapper>
    </div>
  );
}

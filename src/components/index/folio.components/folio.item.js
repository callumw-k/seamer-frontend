import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../../helpers";
import { Link } from "gatsby";

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
  font-size: var(--h2);
`;

export default function FolioItem({
  alt,
  image,
  type,
  title,
  subtitle,
  single,
  url,
  extendStyles,
}) {
  return (
    <div>
      <GatsbyImage image={image} alt={alt ? alt : title} />
      <ContentWrapper css={extendStyles} single={single}>
        <p css={smallTextStyling}>{type}</p>
        <Link to={url}>
          <h3 css={titleStyling}>{title}</h3>
        </Link>
        <p>{subtitle}</p>
      </ContentWrapper>
    </div>
  );
}

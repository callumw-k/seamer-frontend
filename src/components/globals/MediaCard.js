import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../helpers";
import { Link } from "gatsby";

const ContentWrapper = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  ${(props) => (props.single ? "" : "padding: 0 5%;")}
  
  ${breakpoints.max_md} {
    padding: 0 5%;
  }
`;

const smallTextStyling = css`
  font-size: var(--smallText);
  margin-bottom: 0.5rem;
`;
const titleStyling = css`
  margin: 0;
  font-size: var(--h2);
`;

export default function MediaCard({
  alt,
  image,
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
        <Link to={url}>
          <h3 css={titleStyling}>{subtitle}</h3>
        </Link>
        {title && <p>{title}</p>}
      </ContentWrapper>
    </div>
  );
}

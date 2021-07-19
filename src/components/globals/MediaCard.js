import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../helpers";
import { Link } from "gatsby";

const ContentWrapper = styled.div`
  max-width: 90%;

  ${(props) => (props.single ? "" : "padding: 0 5%;")}

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ${breakpoints.max_md} {
    padding: 0 5%;
  }
`;

const imgStyling = css`
  & img:hover {
    transform: scale(1.05);
  }
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
      <Link to={url}>
        <GatsbyImage
          css={imgStyling}
          style={{ overflow: "hidden" }}
          imgStyle={{ transition: "200ms transform ease-in-out" }}
          image={image}
          alt={alt ? alt : title}
        />
      </Link>
      <ContentWrapper css={extendStyles} single={single}>
        <Link to={url}>
          <h3 css={titleStyling}>{subtitle}</h3>
        </Link>
        {title && <p>{title}</p>}
      </ContentWrapper>
    </div>
  );
}

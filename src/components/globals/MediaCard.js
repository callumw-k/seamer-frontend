import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../helpers";
import { Link } from "gatsby";
import LazyIframe from "../lazyiframe";

const ContentWrapper = styled.div`
  ${(props) => (props.home ? "padding: 0 5%" : "")};

  p {
    margin-top: 0.25rem;
  }

  ${breakpoints.md} {
    max-width: 90%;
    ${(props) => (props.single ? "padding: 0 0;" : "padding: 0 5%;")}
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

const linkStyling = css`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function MediaCard({
  alt,
  image,
  title,
  subtitle,
  single,
  url,
  extendStyles,
  home,
  videourl,
}) {
  return (
    <div>
      <Link style={{ width: "100%" }} to={url}>
        {videourl && <LazyIframe url={videourl} title={title} />}
        {image && (
          <GatsbyImage
            css={imgStyling}
            style={{ overflow: "hidden" }}
            imgStyle={{ transition: "200ms transform ease-in-out" }}
            image={image}
            alt={alt ? alt : title}
          />
        )}
      </Link>
      <ContentWrapper home={home ? 1 : 0} css={extendStyles} single={single}>
        <Link css={linkStyling} to={url}>
          <h3 css={titleStyling}>{subtitle}</h3>
        </Link>
        {title && <p>{title}</p>}
      </ContentWrapper>
    </div>
  );
}

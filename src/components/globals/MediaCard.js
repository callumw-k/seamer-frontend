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
    margin-top: 1.2rem;
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
            quality={100}
            css={imgStyling}
            style={{ overflow: "hidden" }}
            imgStyle={{ transition: "200ms transform ease-in-out" }}
            image={image}
            alt={alt ? alt : title}
            aria-label={title}
          />
        )}
      </Link>
      <ContentWrapper home={home ? 1 : 0} css={extendStyles} single={single}>
        <Link css={linkStyling} to={url}>
          <h3 className="medium-heading" css={titleStyling}>
            {subtitle}
          </h3>
        </Link>
        {title && <p className="small-text">{title}</p>}
      </ContentWrapper>
    </div>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { breakpoints } from "../helpers";
import { css } from "@emotion/react";
import { Link } from "gatsby";

const Wrapper = styled.article`
  display: flex;
  flex-flow: column nowrap;
  margin: 2rem 0;
  ${breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.article`
  font-size: var(--h4);
  order: 2;
  h2 {
    margin: 0.5rem 0 0;
  }
  ${breakpoints.md} {
    width: 60%;
    order: 0;
  }
`;
const imageStyles = css`
  ${breakpoints.md} {
    width: 32%;
  }
`;

export default function NewsCard({ title, subtitle, image, linkto }) {
  const imageData = image.gatsbyImageData;
  const altText = image.altText || title;
  return (
    <Wrapper>
      <Content>
        <Link to={linkto}>
          <h2>{title}</h2>
        </Link>
        <p>{subtitle}</p>
      </Content>
      <GatsbyImage css={imageStyles} alt={altText} image={imageData} />
    </Wrapper>
  );
}

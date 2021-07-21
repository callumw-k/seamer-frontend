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
  order: 2;

  p {
    font-size: var(--h5);
  }

  h2 {
    margin: 0.5rem 0 0;
    font-size: var(--h3);
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

export default function NewsCard({ title, subtitle, image, linkto, date }) {
  const imageData = image.gatsbyImageData;
  const altText = image.altText || title;
  return (
    <Wrapper>
      <Content>
        <Link to={linkto}>
          <h2>{title}</h2>
        </Link>
        <p>{subtitle}</p>
        <p>{date}</p>
      </Content>
      <GatsbyImage css={imageStyles} alt={altText} image={imageData} />
    </Wrapper>
  );
}

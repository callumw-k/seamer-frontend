import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { centre_content } from "../helpers";

const ComponentWrapper = styled.section`
  h2 {
    margin-bottom: 4rem;
  }
  ${centre_content.lg};
  margin: 8rem auto;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20%);
  grid-auto-rows: minmax(50px, 100px);
  justify-content: space-between;
  grid-row-gap: 4rem;
`;

export default function ClientLogos() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "client-logos" } }) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `);
  const images = data.allFile.nodes;
  return (
    <ComponentWrapper>
      <h2>Some of our clients.</h2>
      <GridWrapper>
        {images.map((image) => (
          <GatsbyImage
            key={image.id}
            alt=""
            imgStyle={{ objectFit: "contain" }}
            image={image.childImageSharp.gatsbyImageData}
          />
        ))}
      </GridWrapper>
    </ComponentWrapper>
  );
}

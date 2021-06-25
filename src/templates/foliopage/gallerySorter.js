import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../../components/helpers";
const isThreeColumn = `
`;
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem 1rem;

  ${breakpoints.md} {
    grid-template-columns: 50% 50%;
    ${centre_content.xl};
    div:nth-of-type(1) {
      grid-column: 1/3;
    }
  }
`;
export default function GallerySorter({ gallery, name }) {
  if (gallery) {
    console.log(gallery.length === 3 ? "true" : "false");
    return (
      <ImageGrid>
        {gallery.map((image) => (
          <GatsbyImage
            length={gallery.length}
            key={image.asset.id}
            alt={image.asset?.altText ? image.asset.altText : name}
            image={image.asset.gatsbyImageData}
          />
        ))}
      </ImageGrid>
    );
  } else return "";
}

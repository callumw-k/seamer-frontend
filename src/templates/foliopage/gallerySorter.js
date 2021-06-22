import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  div:nth-of-type(3) {
    grid-column: 1/3;
  }
`;
export default function GallerySorter({ gallery }) {
  if (gallery) {
    return (
      <ImageGrid>
        {gallery.map((image) => (
          <GatsbyImage
            key={image.asset.id}
            alt="Yeet"
            image={image.asset.gatsbyImageData}
          />
        ))}
      </ImageGrid>
    );
  }
}

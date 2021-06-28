import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../../components/helpers";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem 1rem;

  width: ${(props) => props.length};
  ${breakpoints.md} {
    grid-template-columns: 50% 50%;
    ${centre_content.xl};
    & > div:first-of-type {
      grid-column: ${(props) => (props.length ? "1/3" : "1/2")};
    }
  }
`;
export default function GallerySorter({ gallery, name }) {
  if (gallery) {
    let length = gallery.length === 3 ? 1 : 0;
    return (
      <ImageGrid length={length}>
        {gallery.map((image) => (
          <GatsbyImage
            key={image.asset.id}
            alt={image.asset?.altText ? image.asset.altText : name}
            image={image.asset.gatsbyImageData}
          />
        ))}
      </ImageGrid>
    );
  } else return "";
}

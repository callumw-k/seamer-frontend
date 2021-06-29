import React from "react";
import MediaCard from "../globals/MediaCard";
import FolioDouble from "./folio.components/folio.double";
import FolioSingle from "./folio.components/folio.single";
import styled from "@emotion/styled";

const FolioWrapper = styled.section`
  max-width: 2100px;
  margin: var(--marginSpacingLarge);
`;
function FolioItemGenerator({ folioItem, single }) {
  return (
    <MediaCard
      image={folioItem.heroImage.asset.gatsbyImageData}
      alt={folioItem.heroImage.asset.altText}
      type={folioItem.type}
      title={folioItem.name}
      subtitle={folioItem.subtitle}
      url={"work/" + folioItem.slug.current}
      single={single ? single : ""}
    />
  );
}

export default function HomeFolio({ folioItems }) {
  return (
    <FolioWrapper>
      <FolioDouble>
        {folioItems.slice(0, 2).map((folioItem) => {
          return (
            <FolioItemGenerator key={folioItem._id} folioItem={folioItem} />
          );
        })}
      </FolioDouble>
      <FolioSingle>
        <FolioItemGenerator
          single
          key={folioItems[2]._id}
          folioItem={folioItems[2]}
        />
      </FolioSingle>
      <FolioDouble staggered={1}>
        {folioItems.slice(3).map((folioItem) => {
          return (
            <FolioItemGenerator key={folioItem._id} folioItem={folioItem} />
          );
        })}
      </FolioDouble>
    </FolioWrapper>
  );
}

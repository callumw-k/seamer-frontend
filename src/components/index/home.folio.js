import React from "react";
import FolioItem from "./folio.components/folio.item";
import FolioDouble from "./folio.components/folio.double";
import FolioSingle from "./folio.components/folio.single";

function FolioItemGenerator({ folioItem, single }) {
  return (
    <FolioItem
      image={folioItem.heroImage.asset.gatsbyImageData}
      alt={folioItem.heroImage.asset.altText}
      type={folioItem.type}
      title={folioItem.name}
      subtitle={folioItem.subtitle}
      url={folioItem.slug.current}
      single={single ? single : ""}
    />
  );
}

export default function HomeFolio({ folioItems }) {
  return (
    <section>
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
    </section>
  );
}

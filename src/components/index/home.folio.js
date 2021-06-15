import React from "react";
import FolioDouble from "./folio.components/folio.double";
import FolioItem from "./folio.components/folio.item";
import FolioSingle from "./folio.components/folio.single";
import { graphql, useStaticQuery } from "gatsby";

const FolioInfo = {
  APB: {
    type: "Branding",
    title: "Adult Parole Board of Victoria",
    img: "../../../images/adult-parol-board.jfif",
    subtitle: "Branding for Victoria’s public safety",
  },
};
//
// const query = graphql`
//
//     query {
//
//     }
//
// `;

export default function HomeFolio() {
  return (
    <section>
      <FolioDouble staggered>
        <FolioItem
          imageUrl="../../../images/adb.jfif"
          type={FolioInfo.APB.type}
          title="Adult Parole Board of Victoria"
          subtitle="Branding for Victoria’s public safety"
        />
        <FolioItem
          type="Branding"
          title="Adult Parole Board of Victoria"
          subtitle="Branding for Victoria’s public safety"
        />
      </FolioDouble>
      <FolioSingle>
        <FolioItem type="Branding" title="Adult Test" subtitle="test" single />
      </FolioSingle>
      <FolioDouble>
        <FolioItem
          type={FolioInfo.APB.type}
          title="Adult Parole Board of Victoria"
          subtitle="Branding for Victoria’s public safety"
        />
        <FolioItem
          type="Branding"
          title="Adult Parole Board of Victoria"
          subtitle="Branding for Victoria’s public safety"
        />
      </FolioDouble>
    </section>
  );
}

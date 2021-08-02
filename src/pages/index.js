import React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/home.hero";
import HomeClients from "../components/index/home.clients";
import HomeAboutUs from "../components/index/home.about-us";
import { graphql } from "gatsby";
import HeadMeta from "../components/HeadMeta";
import ClientLogos from "../components/index/home.ClientLogo";
import LazyIframe from "../components/lazyiframe";

// markup
export default function IndexPage({ data, location }) {
  const clients = data.clients.nodes;
  const pageMeta = data.pageMeta.SEO;
  return (
    <Layout>
      <HeadMeta
        title={pageMeta.seoTitle}
        description={pageMeta.seoDescription}
        slug={location.pathname}
      />
      <HomeHero
        title={"Tailor Made Brands"}
        subtitle={
          "From branding and graphic design to web, we’re ready to tailor a solution for you."
        }
        internalLinkUrl={"/contact"}
        internalLinkText={"Here's how"}
      />
      <LazyIframe
        title="Seamer design video"
        url={
          "https://iframe.videodelivery.net/343f1a0f80efd25096c6913ccfd8e5c4?muted=true&loop=true&autoplay=true&controls=false"
        }
      />
      <HomeAboutUs />
      <HomeClients clients={clients} />
      <ClientLogos />
    </Layout>
  );
}

export const query = graphql`
  query {
    clients: allSanityClients(sort: { order: ASC, fields: name }, limit: 8) {
      nodes {
        name
        _id
        slug {
          current
        }
        videurl
        heroImage {
          asset {
            gatsbyImageData(
              aspectRatio: 1.3
              placeholder: BLURRED
              layout: FULL_WIDTH
            )
            altText
          }
        }
        subtitle
        type
      }
    }
    pageMeta: sanityPages(name: { eq: "Index" }) {
      SEO {
        seoTitle
        seoDescription
      }
      name
      id
    }
  }
`;

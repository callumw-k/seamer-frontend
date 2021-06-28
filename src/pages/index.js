import * as React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/home.hero";
import HomeVideo from "../components/index/home.video";
import HomeFolio from "../components/index/home.folio";
import HomeAboutUs from "../components/index/home.about-us";
import { graphql } from "gatsby";
import HeadMeta from "../components/HeadMeta";
import ClientLogos from "../components/index/home.ClientLogo";

// markup
const IndexPage = ({ data, location }) => {
  const folioItems = data.folioItems.nodes;
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
      <HomeVideo />
      <HomeAboutUs />
      <HomeFolio folioItems={folioItems} />
      <ClientLogos />
    </Layout>
  );
};

export const query = graphql`
  query {
    folioItems: allSanityFolio(
      sort: { order: ASC, fields: _createdAt }
      limit: 5
    ) {
      nodes {
        name
        _id
        slug {
          current
        }
        heroImage {
          asset {
            gatsbyImageData(aspectRatio: 1.7)
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

export default IndexPage;

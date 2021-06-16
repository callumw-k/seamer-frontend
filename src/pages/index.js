import * as React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/home.hero";
import HomeVideo from "../components/index/home.video";
import HomeFolio from "../components/index/home.folio";
import HomeAboutUs from "../components/index/home.about-us";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  const folioItems = data.folioItems.nodes;
  return (
    <Layout>
      <HomeHero
        title={"Tailor Made Brands"}
        subtitle={
          "From branding and graphic design to web, we’re ready to tailor a solution for you."
        }
        internalLinkUrl={"/contact"}
        internalLinkText={"Here's how"}
      />
      {/*<HomeVideo />*/}
      <HomeAboutUs />
      <HomeFolio folioItems={folioItems} />
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
            altText
            gatsbyImageData
          }
        }
        subtitle
        type
      }
    }
  }
`;

export default IndexPage;

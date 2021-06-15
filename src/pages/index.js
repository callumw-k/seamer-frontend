import * as React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/home.hero";
import HomeVideo from "../components/index/home.video";
import HomeFolio from "../components/index/home.folio";
import HomeAboutUs from "../components/index/home.about-us";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// markup
const IndexPage = ({ data }) => {
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
      <HomeVideo />
      <HomeAboutUs />
      <HomeFolio />
      {console.log(data.folioItems)}
      {/*<GatsbyImage*/}
      {/*  alt="Test"*/}
      {/*  image={data.folioItems.nodes.asset.gatsbyImageData}*/}
      {/*/>*/}
    </Layout>
  );
};

export const query = graphql`
  query {
    folioItems: allSanityFolio {
      nodes {
        name
        _id
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default IndexPage;

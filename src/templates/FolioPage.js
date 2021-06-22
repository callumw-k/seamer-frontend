import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";
import GallerySorter from "./foliopage/gallerySorter";

const ContentBlockWrapper = styled.div`
  ${centre_content.lg};
  margin: 4rem auto;
`;

function ContentBlockChecker({ blocks }) {
  if (blocks) {
    return (
      <ContentBlockWrapper>
        <BlockContent blocks={blocks} />
      </ContentBlockWrapper>
    );
  } else {
    return null;
  }
}

export default function FolioPage({ data }) {
  const folioPage = data.folioPage;
  const heroImage = folioPage?.heroImage?.asset;
  return (
    <Layout>
      <GatsbyImage
        alt={heroImage?.altText ? heroImage.altText : folioPage.name}
        image={heroImage.gatsbyImageData}
        quality={100}
      />
      <ContentBlockChecker blocks={folioPage._rawFirstContentBlock} />
      <GallerySorter gallery={folioPage?.Gallery?.images.splice(0, 3)} />
      <ContentBlockChecker blocks={folioPage._rawMiddleContentBlock} />
      <ContentBlockChecker blocks={folioPage._rawEndContentBlock} />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    folioPage: sanityFolio(slug: { current: { eq: $slug } }) {
      name
      subtitle
      type
      _rawFirstContentBlock
      _rawEndContentBlock
      _rawMiddleContentBlock
      heroImage {
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
          altText
        }
      }
      Gallery {
        images {
          asset {
            gatsbyImageData
            id
          }
        }
      }
    }
  }
`;

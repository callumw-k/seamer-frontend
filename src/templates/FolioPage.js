import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";
import GallerySorter from "./foliopage/gallerySorter";
import SEO from "../components/seo";

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
    return "";
  }
}

export default function FolioPage({ data, location }) {
  const folioPage = data.folioPage;
  const heroImage = folioPage?.heroImage?.asset;
  const seoMeta = folioPage?.SEO;
  return (
    <Layout>
      <SEO
        title={seoMeta?.title ? seoMeta.title : folioPage.name}
        description={seoMeta?.description}
        slug={location.pathname}
      />
      <GatsbyImage
        alt={heroImage?.altText ? heroImage.altText : folioPage.name}
        image={heroImage.gatsbyImageData}
        quality={100}
      />
      <ContentBlockChecker blocks={folioPage._rawFirstContentBlock} />
      <GallerySorter gallery={folioPage?.firstGallery?.images} />
      <ContentBlockChecker blocks={folioPage._rawMiddleContentBlock} />
      <GallerySorter gallery={folioPage?.secondGallery?.images} />
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
      firstGallery {
        images {
          asset {
            gatsbyImageData
            id
          }
        }
      }
      secondGallery {
        images {
          asset {
            gatsbyImageData
            id
          }
        }
      }
      SEO {
        title: seoTitle
        description: seoDescription
        seoImage {
          asset {
            id
            url
          }
        }
      }
    }
  }
`;

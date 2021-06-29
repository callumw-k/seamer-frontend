import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";
import GallerySorter from "./foliopage/gallerySorter";
import HeadMeta from "../components/HeadMeta";
import Hero from "../components/globals/Hero";

const ContentBlockWrapper = styled.div`
  ${centre_content.xl};
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
      <HeadMeta
        title={seoMeta?.title ? seoMeta.title : folioPage.name}
        description={seoMeta?.description}
        slug={location.pathname}
      />
      <Hero title={folioPage.name} subtitle={folioPage.subtitle} />
      <GatsbyImage
        alt={heroImage?.altText ? heroImage.altText : folioPage.name}
        image={heroImage.gatsbyImageData}
        quality={100}
      />
      <ContentBlockChecker blocks={folioPage._rawFirstContentBlock} />
      <GallerySorter
        name={folioPage.name}
        gallery={folioPage?.firstGallery?.images}
      />
      <ContentBlockChecker blocks={folioPage._rawMiddleContentBlock} />
      <GallerySorter
        name={folioPage.name}
        gallery={folioPage?.secondGallery?.images}
      />
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
            gatsbyImageData(aspectRatio: 1.78)
            id
            altText
          }
        }
      }
      secondGallery {
        images {
          asset {
            gatsbyImageData(aspectRatio: 1.78)
            id
            altText
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

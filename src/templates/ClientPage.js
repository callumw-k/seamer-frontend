import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import {
  breakpoints,
  centre_content,
  fontMarginReset,
} from "../components/helpers";
import GallerySorter from "./foliopage/gallerySorter";
import HeadMeta from "../components/HeadMeta";
import Hero from "../components/globals/Hero";

const ContentBlockWrapper = styled.div`
  ${centre_content.xl};
  margin: 4rem auto;
  ${breakpoints.lg} {
    display: grid;
    grid-template-columns: 48% 50%;
    justify-content: space-between;
    h3 {
      ${fontMarginReset};
    }
  }
`;

const Paragraph = styled.div`
  flex-basis: 50%;
  & p:first-of-type {
    margin-top: 0;
  }
`;

function ContentBlockGenerator({ block }) {
  if (block.title && block.content) {
    return (
      <ContentBlockWrapper>
        <h3>{block.title}</h3>
        <Paragraph>
          <BlockContent blocks={block.content} />
        </Paragraph>
      </ContentBlockWrapper>
    );
  } else {
    return null;
  }
}

export default function ClientPage({ data, location }) {
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
      {folioPage.firstContent && (
        <ContentBlockGenerator block={folioPage.firstContent} />
      )}
      <GallerySorter
        name={folioPage.name}
        gallery={folioPage?.firstGallery?.images}
      />
      {folioPage.secondContent && (
        <ContentBlockGenerator block={folioPage.secondContent} />
      )}
      <GallerySorter
        name={folioPage.name}
        gallery={folioPage?.secondGallery?.images}
      />
      {folioPage.thirdContent && (
        <ContentBlockGenerator block={folioPage.thirdContent} />
      )}
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    folioPage: sanityFolio(slug: { current: { eq: $slug } }) {
      name
      subtitle
      type
      heroImage {
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
          altText
        }
      }
      firstContent {
        title
        content: _rawContentBlock
      }
      secondContent {
        title
        content: _rawContentBlock
      }
      thirdContent {
        title
        content: _rawContentBlock
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

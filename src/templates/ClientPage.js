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
import LazyIframe from "../components/lazyiframe";

const ContentBlockWrapper = styled.div`
  ${centre_content.xxl};
  margin: 8rem auto;
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
  const clientPage = data.clientPage;
  const heroImage = clientPage?.heroImage?.asset;
  const seoMeta = clientPage?.SEO;
  return (
    <Layout>
      <HeadMeta
        title={seoMeta?.title ? seoMeta.title : clientPage.name}
        description={seoMeta?.description}
        slug={location.pathname}
      />
      <Hero title={clientPage.name} subtitle={clientPage.subtitle} />
      {heroImage && (
        <GatsbyImage
          alt={heroImage?.altText ? heroImage.altText : clientPage.name}
          image={heroImage.gatsbyImageData}
          quality={100}
        />
      )}
      {clientPage.videurl && (
        <LazyIframe url={clientPage.videurl} title="Test" />
      )}
      {clientPage.firstContent && (
        <ContentBlockGenerator block={clientPage.firstContent} />
      )}
      <GallerySorter
        name={clientPage.name}
        gallery={clientPage?.firstGallery?.images}
      />
      {clientPage.secondContent && (
        <ContentBlockGenerator block={clientPage.secondContent} />
      )}
      <GallerySorter
        name={clientPage.name}
        gallery={clientPage?.secondGallery?.images}
      />
      {clientPage.thirdContent && (
        <ContentBlockGenerator block={clientPage.thirdContent} />
      )}
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    clientPage: sanityClients(slug: { current: { eq: $slug } }) {
      name
      subtitle
      type
      videurl
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
            gatsbyImageData
            id
            altText
          }
        }
      }
      secondGallery {
        images {
          asset {
            gatsbyImageData
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

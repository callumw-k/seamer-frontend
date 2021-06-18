import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";

const ContentBlockWrapper = styled.div`
  ${centre_content.lg};
  margin: 4rem auto;
`;

function GalleryGenerator({ gallery }) {
  return (
    <>
      {gallery.map((image) => (
        <GatsbyImage
          key={image.asset.id}
          alt="yeet"
          image={image.asset.gatsbyImageData}
        />
      ))}
    </>
  );
}

export default function FolioPage({ data }) {
  const folioPage = data.folioPage;
  return (
    <Layout>
      <GatsbyImage
        alt={
          folioPage.heroImage.asset.altText
            ? folioPage.heroImage.asset.altText
            : folioPage.name
        }
        image={folioPage.heroImage.asset.gatsbyImageData}
        quality={100}
      />
      <ContentBlockWrapper>
        {folioPage?._rawFirstContentBlock ? (
          <BlockContent blocks={folioPage._rawFirstContentBlock} />
        ) : (
          ""
        )}
      </ContentBlockWrapper>
      <GalleryGenerator gallery={folioPage.Gallery.images} />
      <ContentBlockWrapper>
        {folioPage?._rawMiddleContentBlock ? (
          <BlockContent blocks={folioPage._rawMiddleContentBlock} />
        ) : (
          ""
        )}
      </ContentBlockWrapper>
      <ContentBlockWrapper>
        {folioPage?._rawEndContentBlock ? (
          <BlockContent blocks={folioPage._rawEndContentBlock} />
        ) : (
          ""
        )}
      </ContentBlockWrapper>
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

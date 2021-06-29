import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import Hero from "../components/globals/Hero";
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";
import { css } from "@emotion/react";

const ContentWrapper = styled.article`
  ${centre_content.md};
`;

export default function BlogPage({ data, location }) {
  const postContent = data.sanityPost;
  const headMeta = postContent.headMeta;

  return (
    <Layout>
      <HeadMeta
        title={headMeta?.title}
        description={headMeta?.description}
        slug={location.pathname}
      />
      <Hero title={postContent.name} subtitle={postContent.subtitle} />
      <GatsbyImage
        alt={
          (postContent.heroImage.asset.altText &&
            postContent.heroImage.asset.altText) ||
          postContent.name
        }
        quality={100}
        css={css`
          ${centre_content.xl};
        `}
        image={postContent.heroImage.asset.gatsbyImageData}
      />
      <ContentWrapper>
        {postContent._rawFirstContentBlock && (
          <BlockContent blocks={postContent._rawFirstContentBlock} />
        )}
      </ContentWrapper>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      name
      subtitle
      slug {
        current
      }
      _rawFirstContentBlock
      subtitle
      heroImage {
        asset {
          altText
          gatsbyImageData(aspectRatio: 1.78, layout: FULL_WIDTH)
        }
      }
      headMeta: SEO {
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

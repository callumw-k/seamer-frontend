import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import Hero from "../components/globals/Hero";
import { GatsbyImage } from "gatsby-plugin-image";
import BlockContent from "@sanity/block-content-to-react";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";

const ContentWrapper = styled.article`
  ${centre_content.md};
  margin-top: 4rem;
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
      <Hero
        subtitle={postContent.date}
        title={postContent.name}
        // description={postContent.subtitle}
      />
      <GatsbyImage
        alt={
          (postContent.heroImage.asset.altText &&
            postContent.heroImage.asset.altText) ||
          postContent.name
        }
        quality={100}
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
      date(formatString: "DD.MM.YYYY")
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

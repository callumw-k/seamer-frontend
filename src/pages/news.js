import React from "react";
import Layout from "../components/layout";
import Hero from "../components/globals/Hero";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";
import HeadMeta from "../components/HeadMeta";
import NewsCard from "../components/news/news.media-card";

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${centre_content.xxxl}
`;

export default function News({ data, location }) {
  const postDetails = data.allSanityPost.nodes;
  const pageMeta = data.pageMeta.SEO;

  //loop over posts and return the media card
  function postLoop(posts) {
    return posts.map((post) => (
      <NewsCard
        title={post.name}
        image={post.heroImage.asset}
        subtitle={post.description}
        linkto={post.slug.current}
      />
    ));
  }

  return (
    <Layout>
      <HeadMeta
        slug={location.pathname}
        title={pageMeta.title}
        description={pageMeta.description}
      />
      <Hero width="lg" title="News" description="Business and brand news" />
      <GridWrapper>{postLoop(postDetails)}</GridWrapper>
    </Layout>
  );
}
export const query = graphql`
  {
    allSanityPost {
      nodes {
        id
        name
        subtitle
        slug {
          current
        }
        heroImage {
          asset {
            gatsbyImageData(aspectRatio: 1.3)
            altText
          }
        }
      }
    }
    pageMeta: sanityPages(slug: { current: { eq: "news" } }) {
      SEO {
        title: seoTitle
        description: seoDescription
      }
    }
  }
`;

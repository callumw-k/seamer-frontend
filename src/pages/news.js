import React from "react";
import Layout from "../components/layout";
import Hero from "../components/globals/Hero";
import { graphql } from "gatsby";
import MediaCard from "../components/globals/MediaCard";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../components/helpers";
import HeadMeta from "../components/HeadMeta";

const GridWrapper = styled.div`
  display: grid;
  ${breakpoints.md} {
    grid-template-columns: repeat(2, 49%);
  }
  grid-row-gap: 2rem;
  justify-content: space-between;
  ${centre_content.xxxl}
`;

export default function News({ data, location }) {
  const postDetails = data.allSanityPost.nodes;
  const pageMeta = data.pageMeta.SEO;

  //loop over posts and return the media card
  function postLoop(posts) {
    return posts.map((post) => (
      <MediaCard
        key={post.id}
        title={post.name}
        image={post?.heroImage?.asset?.gatsbyImageData}
        url={`/work/${post.slug.current}`}
        single
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
        slug {
          current
        }
        heroImage {
          asset {
            gatsbyImageData(aspectRatio: 1.3)
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

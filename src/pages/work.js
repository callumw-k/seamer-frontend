import React from "react";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import MediaCard from "../components/globals/MediaCard";
import { breakpoints, centre_content } from "../components/helpers";
import { css } from "@emotion/react";
import Hero from "../components/globals/Hero";

const WorkInner = styled.div`
  display: grid;
  ${breakpoints.md} {
    grid-template-columns: repeat(2, 49%);
  }
  grid-row-gap: 2rem;
  justify-content: space-between;
  ${centre_content.xxxl}
`;

const Work = ({ data, location }) => {
  const clients = data.clients.nodes;
  const seoMeta = data.workPage.SEO;
  return (
    <Layout>
      <HeadMeta
        title={seoMeta.title}
        description={seoMeta.description}
        slug={location.pathname}
      />

      <Hero width={"lg"} title="Our Work" description="Made to Work" />
      <WorkInner>
        {clients.map((client) => (
          <MediaCard
            key={client._id}
            title={client.name}
            image={client.heroImage?.asset.gatsbyImageData}
            url={client.slug.current}
            single
            videourl={client?.videurl}
            subtitle={client.subtitle}
            extendStyles={css`
              h3 {
                font-size: var(--h2);
              }
            `}
          />
        ))}
      </WorkInner>
    </Layout>
  );
};

export const query = graphql`
  {
    clients: allSanityClients(sort: { fields: _createdAt }) {
      nodes {
        _id
        name
        videurl
        slug {
          current
        }
        subtitle
        heroImage {
          asset {
            gatsbyImageData(aspectRatio: 1.3)
            altText
          }
        }
      }
    }
    workPage: sanityPages(slug: { current: { eq: "work" } }) {
      SEO {
        title: seoTitle
        description: seoDescription
        seoImage {
          asset {
            id
          }
        }
      }
    }
  }
`;

export default Work;

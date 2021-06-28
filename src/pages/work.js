import React from "react";
import Layout from "../components/layout";
import HeadMeta from "../components/HeadMeta";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import FolioItem from "../components/index/folio.components/folio.item";
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
  ${centre_content.lg}
`;

const Work = ({ data, location }) => {
  const folioInfo = data.allSanityFolio.nodes;
  const seoMeta = data.workPage.SEO;
  console.log(location.pathname);
  return (
    <Layout>
      <HeadMeta
        title={seoMeta.title}
        description={seoMeta.description}
        slug={location.pathname}
      />

      <Hero width={"lg"} title="Our Work" description="Made to Work" />
      <div>
        <WorkInner>
          {folioInfo.map((folioItem) => (
            <FolioItem
              key={folioItem._id}
              title={folioItem.name}
              image={folioItem.heroImage.asset.gatsbyImageData}
              url={folioItem.slug.current}
              single
              subtitle={folioItem.subtitle}
              extendStyles={css`
                h3 {
                  font-size: var(--h3);
                }
              `}
            />
          ))}
        </WorkInner>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityFolio(sort: { fields: _createdAt }) {
      nodes {
        _id
        name
        slug {
          current
        }
        subtitle
        heroImage {
          asset {
            gatsbyImageData(aspectRatio: 1.7)
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

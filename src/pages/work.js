import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import FolioItem from "../components/index/folio.components/folio.item";
import { centre_content } from "../components/helpers";
import { css } from "@emotion/react";

const WorkInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 49%);
  grid-row-gap: 2rem;
  justify-content: space-between;
  ${centre_content.lg}
`;

const Work = ({ data }) => {
  const folioInfo = data.allSanityFolio.nodes;
  console.log(folioInfo);
  return (
    <Layout>
      <SEO />
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
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Work;

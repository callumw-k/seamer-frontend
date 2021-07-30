import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/globals/Hero";
import ContentBlock from "../components/globals/content-block";
import HeadMeta from "../components/HeadMeta";
import AboutValues from "../components/about/about.values";
// import Content from "../components/about/about.first-content-block";
// import SecondContentBlock from "../components/about/about.second-content-block";

const HeaderWrapper = styled.div`
  background-color: #f5f5f4;
  padding: 6rem 0;
`;

export default function About({ data, location }) {
  const pageData = data.sanityContactPage;
  const { title, description } = pageData.SEO;
  return (
    <Layout>
      <HeadMeta
        title={title}
        description={description}
        slug={location.pathname}
      />
      <Hero
        title="About"
        description="Your brand partners"
        image={pageData.heroimage.asset.gatsbyImageData}
      />
      <ContentBlock block={pageData.firstBlock} />
      <ContentBlock block={pageData.secondBlock} />
      <AboutValues />
    </Layout>
  );
}

export const query = graphql`
  {
    sanityContactPage {
      title
      firstBlock {
        title
        content: _rawContentBlock
      }
      secondBlock {
        title
        content: _rawContentBlock
      }
      heroimage {
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      SEO {
        title: seoTitle
        description: seoDescription
      }
    }
  }
`;

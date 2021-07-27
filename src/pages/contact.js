import React from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Hero from "../components/globals/Hero";
import Form from "../components/globals/Form";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";

const Inner = styled.div`
  ${centre_content.lg};
  margin: 4rem auto;
`;

export default function ContactPage({ location, data }) {
  const contactPageData = data.pageMeta;
  const pageMeta = data.pageMeta.SEO;
  return (
    <Layout location={location}>
      <HeadMeta
        title={pageMeta.title}
        description={pageMeta.description}
        slug={location.pathname}
      />
      <Hero
        title={"Hello."}
        description={
          "We’d love to hear from you. Get in touch and let’s make brand work, together."
        }
        width="md"
        image={contactPageData.heroimage.asset.gatsbyImageData}
      />
      <Inner>
        <h3>
          Interested in talking to us about a new project or want to find out
          more about our agency?
        </h3>
        <p>
          Please complete the form below or alternatively please feel free to
          email{" "}
          <a href="mailto:hello@seamerdesign.com">hello@seamerdesign.com</a> or
          drop us a line.
        </p>
        <Form />
      </Inner>
    </Layout>
  );
}
export const query = graphql`
  query {
    pageMeta: sanityPages(slug: { current: { eq: "contact" } }) {
      id
      heroimage {
        asset {
          gatsbyImageData
        }
      }
      SEO {
        title: seoTitle
        description: seoDescription
        seoImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

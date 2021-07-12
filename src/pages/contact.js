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
`;

export default function ContactPage({ location, data }) {
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
      />
      <Inner>
        <Form />
      </Inner>
    </Layout>
  );
}
export const query = graphql`
  query {
    pageMeta: sanityPages(slug: { current: { eq: "contact" } }) {
      id
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

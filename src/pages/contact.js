import React from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Hero from "../components/globals/Hero";

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
        width={"md"}
      />
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

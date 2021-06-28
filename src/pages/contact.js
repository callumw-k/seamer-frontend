import React from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { breakpoints, centre_content } from "../components/helpers";
import { graphql } from "gatsby";
import Hero from "../components/globals/Hero";

const Wrapper = styled.div`
  ${centre_content.md};
  margin: 4rem auto;
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
        width={"md"}
      />
      {/*<Wrapper>*/}
      {/*  <h1*/}
      {/*    css={css`*/}
      {/*      font-size: var(--h3);*/}
      {/*    `}*/}
      {/*  >*/}
      {/*    Interested in talking to us about a new project or want to find out*/}
      {/*    more about our agency?*/}
      {/*  </h1>*/}
      {/*  <p>*/}
      {/*    Please complete the form below or alternatively please feel free to*/}
      {/*    email.*/}
      {/*    <a href="mailto:hello@seamerdesign.com">hello@seamerdesign.com</a> or*/}
      {/*    drop us a line.*/}
      {/*  </p>*/}
      {/*</Wrapper>*/}
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

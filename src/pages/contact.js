import React from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { centre_content } from "../components/helpers";
import { css } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const HeroSection = styled.div`
  display: grid;
  overflow: hidden;
`;
const HeroContent = styled.div`
  grid-area: 1/1;
  position: relative;
  justify-content: start;
  align-items: end;
  display: grid;
  ${centre_content.lg};
  h1 {
    color: white;
    text-shadow: 0 0 12px #000000;
    font-weight: var(--fontExtraBold);
    font-size: var(--biggerHeading);
  }
`;
const Wrapper = styled.div`
  ${centre_content.lg};
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
      <HeroSection>
        <StaticImage
          style={{ gridArea: "1/1", maxHeight: "50vh" }}
          src="../images/contact/office.jpg"
          alt="Seamer Design Office"
          aspectRatio={16 / 9}
        />
        <HeroContent>
          <h1>Contact Us</h1>
        </HeroContent>
      </HeroSection>
      <Wrapper>
        <h1
          css={css`
            font-size: var(--h3);
          `}
        >
          Interested in talking to us about a new project or want to find out
          more about our agency?
        </h1>
        <p>
          Please complete the form below or alternatively please feel free to
          email{" "}
          <a href="mailto:hello@seamerdesign.com">hello@seamerdesign.com</a> or
          drop us a line.
        </p>
      </Wrapper>
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

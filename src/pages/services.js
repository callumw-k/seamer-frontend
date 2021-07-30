import React from "react";
import HeadMeta from "../components/HeadMeta";
import Hero from "../components/globals/Hero";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import ContentBlock from "../components/globals/content-block";

export default function Services({ location, data }) {
  const servicesPage = data.servicesPage;
  const { heroimage } = servicesPage;
  const { title, description } = servicesPage.SEO;
  return (
    <Layout>
      <HeadMeta
        title={title}
        description={description}
        slug={location.pathname}
      />
      <Hero
        title="Services"
        description="A full-service offering"
        image={heroimage.asset.gatsbyImageData}
      />
      {servicesPage.services &&
        servicesPage.services.map((service) => (
          <ContentBlock block={service} />
        ))}
    </Layout>
  );
}

export const query = graphql`
  {
    servicesPage: sanityServicesPage {
      id
      SEO {
        title: seoTitle
        description: seoDescription
      }
      heroimage {
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      services {
        title
        content: _rawContentBlock
      }
    }
  }
`;

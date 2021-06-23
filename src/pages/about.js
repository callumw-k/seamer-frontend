import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function AboutPage({ location }) {
  return (
    <Layout>
      <SEO slug={location.pathname} />
    </Layout>
  );
}

import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";

export default function ContactPage({ location }) {
  return (
    <Layout>
      <SEO slug={location.pathname} />
      <p>This is the contact page.</p>
    </Layout>
  );
}

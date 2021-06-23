import React from "react";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/layout";

export default function ContactPage({ location }) {
  return (
    <Layout>
      <HeadMeta slug={location.pathname} />
      <p>This is the contact page.</p>
    </Layout>
  );
}

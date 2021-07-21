import React from "react";
import HeadMeta from "../components/HeadMeta";
import Hero from "../components/globals/Hero";
import Layout from "../components/layout";

export default function Services(location) {
  return (
    <Layout>
      <HeadMeta slug={location.pathname} />
      <Hero title="Services" description="Made to deliver" />
    </Layout>
  );
}

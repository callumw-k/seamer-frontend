import * as React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/hero";
import HomeVideo from "../components/index/video";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <HomeHero
        title={"Tailor Made Brands"}
        subtitle={"Some kind of double line waffle here that's longish."}
        internalLinkUrl={"/contact"}
        internalLinkText={"Here's how"}
      />
      <HomeVideo />
    </Layout>
  );
};

export default IndexPage;

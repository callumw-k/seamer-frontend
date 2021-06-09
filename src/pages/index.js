import * as React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/hero";
import HomeVideo from "../components/index/video";
import HomeFolio from "../components/index/folio";

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
      <HomeFolio />
    </Layout>
  );
};

export default IndexPage;

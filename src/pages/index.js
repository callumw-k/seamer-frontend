import * as React from "react";
import Layout from "../components/layout";
import HomeHero from "../components/index/home.hero";
import HomeVideo from "../components/index/home.video";
import HomeFolio from "../components/index/folio/home.folio";
import HomeAboutUs from "../components/index/home.about-us";

// markup
const IndexPage = (data) => {
  return (
    <Layout>
      <HomeHero
        title={"Tailor Made Brands"}
        subtitle={
          "From branding and graphic design to web, we’re ready to tailor a solution for you."
        }
        internalLinkUrl={"/contact"}
        internalLinkText={"Here's how"}
      />
      <HomeVideo />
      <HomeAboutUs />
      <HomeFolio />
    </Layout>
  );
};
export default IndexPage;

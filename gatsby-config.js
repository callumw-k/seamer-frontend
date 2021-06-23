const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
module.exports = {
  siteMetadata: {
    title: "Seamer Design",
    titleTemplate: "%s | Seamer Design",
    url: "https://seamerdesign.com.au",
    image: "/favicon.png",
    siteUrl: `https://seamerdesign.com.au`,
    siteName: "Seamer Design",
    description:
      "At Seamer Design, we stitch brands together using creative ideas for branding, graphic design, and website design. Call or visit our Melbourne & Ballarat offices.",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "azqsohaz",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

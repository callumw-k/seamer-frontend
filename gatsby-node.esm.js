import path from "path";

async function turnFolioItemsIntoPages({ graphql, actions }) {
  const folioPageTemplate = path.resolve("./src/templates/FolioPage.js");
  const { data } = await graphql(`
    query {
      folioPages: allSanityFolio {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.folioPages.nodes.forEach((folioPage) => {
    actions.createPage({
      path: `work/${folioPage.slug.current}`,
      component: folioPageTemplate,
      context: {
        slug: folioPage.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnFolioItemsIntoPages(params);
}

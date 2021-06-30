import path from "path";

async function turnFolioItemsIntoPages({ graphql, actions }) {
  const clientPageTemplate = path.resolve("./src/templates/ClientPage.js");
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
  data.folioPages.nodes.forEach((clientPage) => {
    actions.createPage({
      path: `work/${clientPage.slug.current}`,
      component: clientPageTemplate,
      context: {
        slug: clientPage.slug.current,
      },
    });
  });
}

async function turnBlogPostIntoPages({ graphql, actions }) {
  const blogPageTemplate = path.resolve("./src/templates/BlogPage.js");
  const { data } = await graphql(`
    {
      allPosts: allSanityPost {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.allPosts.nodes.forEach((blogPage) => {
    actions.createPage({
      path: `work/${blogPage.slug.current}`,
      component: blogPageTemplate,
      context: {
        slug: blogPage.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnFolioItemsIntoPages(params);
  await turnBlogPostIntoPages(params);
}

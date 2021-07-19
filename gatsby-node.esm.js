import path from "path";

async function turnFolioItemsIntoPages({ graphql, actions }) {
  const clientPageTemplate = path.resolve("./src/templates/ClientPage.js");
  const { data } = await graphql(`
    query {
      clients: allSanityClients {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.clients.nodes.forEach((client) => {
    actions.createPage({
      path: `work/${client.slug.current}`,
      component: clientPageTemplate,
      context: {
        slug: client.slug.current,
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
      path: `news/${blogPage.slug.current}`,
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

// Create pages dynamically
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allProducts: { products },
    },
  } = await graphql(`
    query GetProducts {
      allProducts: allContentfulProduct {
        products: nodes {
          slug
        }
      }
    }
  `)

  products.forEach(({ slug }) => {
    createPage({
      path: `products/${slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug,
      },
    })
  })
}

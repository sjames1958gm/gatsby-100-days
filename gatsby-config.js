/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "gatsby class site",
    description: "This is the Udemy course site",
    author: "@sjames",
    data: ["item1", "item2"],
    person: { name: "john doe", age: 50 },
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "f19hrkfxwrdm",
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}

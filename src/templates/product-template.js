import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

const ProductTemplate = ({ data: { product } }) => (
  <Layout>
    <div className="flex flex-col text-center">
      <div className="ml-10">
        <h1 className="text-2xl capitalize mt-10 mr-10 inline-block">
          {product.title}
        </h1>
        <span className="text-blue-400">
          <Link to="/products">back</Link>
        </span>
      </div>
      <Image
        className="h-full mx-auto mt-10"
        alt=""
        fixed={product.image.fixed}
      ></Image>
      <p className="text-xl m-10">{product.info.info}</p>
      <p className="mb-10 text-lg">
        Price: <span>${product.price}</span>
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query GetProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fixed(width: 400) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ProductTemplate

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Image from "gatsby-image"

export const query = graphql`
  query productsQuery {
    allContentfulProduct {
      nodes {
        id
        price
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Products = ({ data }) => {
  const products = data.allContentfulProduct.nodes
  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold mb-10">
        Here are our Products
      </h1>
      <section>
        <ul className="flex md:flex-row flex-col justify-around">
          {products.map(p => {
              console.log(p);
            return (
              <li key={p.id} className="flex flex-col text-center">
                <Image className="h-full" alt="" fluid={p.image.fluid}></Image>
                <h3 className="capitalize text-xl">
                  {p.title}<span className="text-gray-500 color-lg"> ${p.price}</span>
                </h3>
                <Link className="underline" to={p.slug}>more details . . .</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default Products

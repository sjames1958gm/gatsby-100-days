import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Header from "../examples/header"
import Img from "gatsby-image"

const Examples = ({ data }) => {
    let index = Math.floor(Math.random() * data.allFile.totalCount)
  return (
    <Layout>
      <h1>This is the Examples Page</h1>
      <Header></Header>
      <Img fixed={data.allFile.nodes[index].childImageSharp.fixed}></Img>
    </Layout>
  )
}

export const query = graphql`
  query ImageQuery {
    allFile {
      totalCount
      nodes {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
export default Examples

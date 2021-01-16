import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          data
          person {
            name
            age
          }
        }
      }
    }
  `)
  return (<section className="flex">
      <p>Name: {data.site.siteMetadata.person.name}</p>
      <p>Age: {data.site.siteMetadata.person.age}</p>
  </section>)
}

export default Header

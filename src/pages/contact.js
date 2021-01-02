import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Contact() {
  return (
    <div>
      <Header headerText="Contacts"></Header>
      <Link to="/">Home</Link>
      <p>Hot to contact us</p>
    </div>
  )
}

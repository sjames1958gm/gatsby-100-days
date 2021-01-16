import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <>
      <hr className="my-3"/>
      <div className=" container mx-auto">
      <Link to="/" className="font-bold inline-block text-center">Contact Us</Link>
      </div>
    </>
  )
}

export default Footer

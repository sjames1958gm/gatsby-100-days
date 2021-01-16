import React from "react"
import Footer from "./footer"
import NavBar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <hr></hr>
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout

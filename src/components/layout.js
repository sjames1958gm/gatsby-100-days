import React from "react"
import Footer from "./footer"
import NavBar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <hr></hr>
      <div className="bg-gray-300">
      <main className="container mx-auto pb-10">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout

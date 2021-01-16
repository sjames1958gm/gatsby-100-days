import { Link } from "gatsby"
import React from "react"

const NavBar = () => {
  return (
    <div className="p-5 bg-gray-200">
      <ul className="flex text-blue-600">
        <li>
          <Link className="mx-5" to="/">Home</Link>
        </li>
        <li>
          <Link className="mx-5" to="/blog">Blog</Link>
        </li>
        <li>
          <Link className="mx-5" to="/products">Products</Link>
        </li>
        <li>
          <Link className="mx-5" to="/examples">Examples</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar

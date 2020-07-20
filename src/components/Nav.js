import React from "react"
import { NavWrapper } from "../elements"
import { useStaticQuery, Link, graphql } from "gatsby"

const Nav = () => {
  //static query to import the image. Gatsby knows about the relativePath of files because we have set up file-system. eq mean 'equals', get that publicURL of that svg
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="" Logo />
      </Link>
    </NavWrapper>
  )
}

export default Nav

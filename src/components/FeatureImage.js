import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

const FeatureImage = ({ fixed }) => {
  //'fixed' to pass to gatsby img
  // const data = useStaticQuery(graphql`
  //   query {
  //     imageSharp(fixed: {})
  //   }
  // `)
  return <FeatureImageWrapper>{/* <Img /> */}</FeatureImageWrapper>
}

export default FeatureImage

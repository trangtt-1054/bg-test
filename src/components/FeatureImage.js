import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ fixed }) => {
  //các cái field khi query là đều có sẵn của Gatsby hết (lên graphiQL sẽ thấy hết)
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "workspace.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  console.log(data)
  return (
    <FeatureImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeatureImageWrapper>
  )
}

//nếu mà có 'fixed' pass vào thì dùng, ko có thì fallback vào data.imageSharp.fixed

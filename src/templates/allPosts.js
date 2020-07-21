import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"
import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numberOfPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}` //if prev page is zero, back to homepage
  const nextPage = `/${currentPage + 1}`
  const posts = data.allMdx.edges
  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Running On Self Love
        </H1>
        <P color="dark2" textAlign="center">
          I started running for all the wrong reasons. I started because of a
          breakup, to get a revenge body. Every run I went on was spent
          critiquing myself with every stride. I became hyperaware of the way my
          body jiggled when I ran, how slow I was compared to other runners and
          how loud and laboured my breaking was. I could barely run a kilometre
          before stopping.
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Content>
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllPosts($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`

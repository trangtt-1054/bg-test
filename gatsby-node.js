//create pages dynamically
//referece: https://www.gatsbyjs.org/tutorial/part-seven/
// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `

//   //**Create paginated pages for posts
//   const postPerPage = 3
//   //có bao nhiêu edge thì có ngần đấy item
//   const numberOfPages = Math.ceil(data.allMdx.edges.length / postPerPage)
//   //ignore the first argument of forEach: a callback
//   Array.from({ length: numberOfPages }).forEach((_, index) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`, //second item of array will be page 2 so ${i + 1}
//       //template component, what component it needs to refer to
//       component: require.resolove("./scr/templates/allPosts.js"),
//       //context into that actual component, pass on some calculated values we need to use on the graphQL
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numberOfPages,
//         currentPage: i + 1,
//       },
//     })
//   })

//   //**Create single post, for each edge, create a page for it
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const od = edge.node.id
//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: { id }, //muốn dùng đc ở graphQL thì phải pass vào context
//     })
//   })
// }

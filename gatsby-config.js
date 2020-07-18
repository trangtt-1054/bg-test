module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`, //after installing a plugin, you have to resolve it
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`, //don't need to resolve because the doc says that
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`, //for .md (markdown file)
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          //plugin we want to support from gatsbyRemark
          {
            resolve: `gatsby-remark-images`,
            options: {
              //optimization option, kể cả có up lên ảnh 3000px thì lúc serve chỉ còn 1200
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      oprtions: {
        fonts: [`roboto mono`, `muli\:400,400i,700,700i`],
        display: "swap",
      },
    },
  ],
}

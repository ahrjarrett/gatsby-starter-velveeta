import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const { edges } = data.allMdx

  return (
    <Layout>
      <SEO title="Blog" keywords={[`gatsby`, `mdx`, `prismjs`, `blog`]} />
      <h1>BLOG</h1>
      <Link to="/tags/">View tags</Link>
      <div>
        <br />
        <h2>Posts:</h2>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return !frontmatter.published ? null : (
            <div key={frontmatter.path}>
              <Link to={`${frontmatter.path}`}>{frontmatter.title}</Link>
            </div>
          )
        })}
        <br />

        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            published
            excerpt
            tags
            image
          }
        }
      }
    }
  }
`

export default Blog

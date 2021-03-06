import React from "react"
import { Link } from "gatsby"
import Layout from "./Layout"

const SingleTag = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout>
      <div style={{ marginBottom: "20px" }}>Other posts about {tagName}:</div>
      {posts.map(post => {
        return (
          <li key={post.frontmatter.path}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </li>
        )
      })}
    </Layout>
  )
}

export default SingleTag

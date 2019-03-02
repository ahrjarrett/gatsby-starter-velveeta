import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mdx from "./article"

const Blogpost = ({ data, pageContext }) => {
  const { mdx } = data
  const { title, date, excerpt, tags, image } = mdx.frontmatter
  const { code } = mdx
  const { prev, next } = pageContext

  return (
    <Layout>
      <React.Fragment>
        {console.log("pageContext", pageContext)}
        {console.log("data", data)}

        <SEO title="BLOG POST TITLE" />
        <h1>Hi from blog post</h1>
        <p>Welcome to blog post</p>
        <Link to="/">Go back to the homepage</Link>

        <Mdx
          date={date}
          excerpt={excerpt}
          tags={tags}
          title={title}
          image={image}
          body={code.body}
          next={next}
          prev={prev}
        />
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  query BlogpostQuery($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        image
        excerpt
        path
        tags
      }
    }
  }
`

export default Blogpost

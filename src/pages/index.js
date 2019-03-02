import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `mdx`, `prismjs`]} />
    <h1>VELVEETA®</h1>
    <p>A Gatsby Starter Theme.</p>
    <p>MDX, Prism.js, Styled Components.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="gatsby-astronaut.png" />
    </div>
    <Link to="/blog/">Read the blog</Link>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

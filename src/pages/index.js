import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome all,</h1>
    <p>I am a fullstack developer working for ASTOUND. The majority of my time at work is spent on a React-Redux application using a C# backend. This project is a client portal that integrates with Salesforce and uses Elastic Search for our asset catalog with tens of thousands of assets.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog-index/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

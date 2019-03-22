import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class SecondPage extends React.Component {
  render(){
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
  }
  <Layout>
    <SEO title="Blog Posts" />
    <h1>My thoughts and projects</h1>
    <p>Enjoy the content. I will post some of my daily trials, tutorials, projects and comments.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
}

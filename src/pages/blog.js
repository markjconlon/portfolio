import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Blog extends React.Component {
  render(){
    const posts = this.props.data.allMarkdownRemark.edges;
    return(
      <Layout>
        <SEO title="Blog Posts" />
        <h1>Blog</h1>
        {posts.map( post => (
          <div key={`${post.node.frontmatter.path}`}>
            <Link to={`${post.node.frontmatter.path}`}>{post.node.frontmatter.title}</Link>
            <p>{post.node.frontmatter.date}</p>
          </div>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark{
      edges{
        node{
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
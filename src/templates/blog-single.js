import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import AuthorCard from "../components/author-card"
import SEO from "../components/seo"

class BlogSingle extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description} />
        <header className="container mx-auto p-6 blog-single-header">
          <h1 className="text-4xl font-bold font-serif">
            {post.frontmatter.title}
          </h1>
          <small className="date">{post.frontmatter.date}</small>
        </header>
        <section className="container mx-auto p-6 blog-single" dangerouslySetInnerHTML={{ __html: post.html }} />
        <AuthorCard date={post.frontmatter.date} />
      </Layout>
    )
  }
}

export default BlogSingle

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
    }
  }
}
`
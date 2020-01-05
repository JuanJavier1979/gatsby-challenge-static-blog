import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class BlogSingle extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <section className="container mx-auto p-6 flex flex-wrap flex-col md:flex-row items-center">
          <h1>
            {post.frontmatter.title}
          </h1>
        </section>
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
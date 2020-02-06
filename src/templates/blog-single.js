import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import AuthorCard from "../components/author-card"
import PostNav from "../components/post-nav"
import SEO from "../components/seo"

const BlogSingle = ({ data, pageContext }) => {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} bodyclass={post.frontmatter.path.replace('/','')} />
      <header className="container mx-auto p-6 blog-single-header">
        <h1 className="block text-4xl font-bold font-serif;">
          {post.frontmatter.title}
        </h1>
        <small className="date">{post.frontmatter.date}</small>
      </header>
      <section className="container mx-auto p-6 blog-single">
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
      <AuthorCard date={post.frontmatter.date} />
      <PostNav pageContext={pageContext} />
    </Layout>
  )
}

export default BlogSingle

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  mdx(fields: { slug: { eq: $slug } }) {
    id
    excerpt(pruneLength: 160)
    body
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
	  description
	  path
    }
  }
}
`
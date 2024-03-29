import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout>
        <SEO title="Home" />
        <section className="container mx-auto p-6 hero-area">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-5xl xl:text-6xl leading-none">Welcome<br />to Juan Javier's Blog</h1>
          <p className="my-8 md:m-0">This is the first version of my blog. <br />I am starting the year with a development challenge. In the first posts I will be writing about the process.<br />Let's start the year with some Gatsby coding!</p>
          <img alt="Cat and human sitting on a couch" className="block mx-auto" src={catAndHumanIllustration} />
        </section>
        <section className="container mx-auto p-6 posts-container">
          <h2 className="text-3xl font-serif font-black mb-2">Read all posts</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug} className="mb-16">
                <header>
                  <small>{node.frontmatter.date}</small>
                  <h3 className="text-2xl font-serif font-black mb-2">{title}</h3>
                </header>
                <section>
                  <p className="mb-4" dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }} />
                  <Link className="read-more-link" to={node.fields.slug} aria-label={`Read the post ${title}`}>Read more</Link>
                </section>
              </article>
            )
          })}
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}
`
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
        <section className="container mx-auto p-6 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start md:text-left pr-8">
            <p className="font-bold text-2xl leading-none">Welcome</p>
            <h2 className="font-serif font-bold text-6xl sm:text-8xl md:text-9xl xl:text-10xl leading-none">2020</h2>
            <p className="mt-6">This is the first version of my blog. <br />I am starting the year with a development challenge. In the first posts I will be writing about the process.<br />Let's start the year with some Gatsby coding!</p>
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">
            <img alt="Cat and human sitting on a couch" className="block mx-auto" src={catAndHumanIllustration} />
          </div>
          </section>
        <section className="container posts-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <small>{node.frontmatter.date}</small>
                  <h3>{title}</h3>
                </header>
                <section>
                  <p className="mb-4" dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }} />
                  <Link className="text-blue-600 shadow-none" to={node.fields.slug}>Read more</Link>
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
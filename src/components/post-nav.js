import React from "react"
import { Link } from "gatsby"

const PostNav = ({ pageContext }) => {
  const { next, previous } = pageContext;

  const previousPost = previous ? (
    <Link to={previous.frontmatter.path}>
      Previous post<br />
      <strong>{previous.frontmatter.title}</strong>
    </Link>
  ) : ''

  const nextPost = next ? (
    <Link to={next.frontmatter.path}>
      Next post<br />
      <strong>{next.frontmatter.title}</strong>
    </Link>
  ) : ''
  
  return (
    <section className="container mx-auto py-12 px-6 flex border-b border-b border-solid border-gray-300 post-nav">
      <div className="prev w-1/2 p-3">{previousPost}</div>
      <div className="next w-1/2 p-3 border-l border-solid border-gray-300 text-right">{nextPost}</div>
    </section>
  )
}

export default PostNav
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
    <section className="container post-nav">
      <div className="prev">{previousPost}</div>
      <div className="next">{nextPost}</div>
    </section>
  )
}

export default PostNav
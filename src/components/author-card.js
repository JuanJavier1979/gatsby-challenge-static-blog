import React from "react"
import JuanJavier from '../images/JuanJavier.jpeg'

const AuthorCard = () => (
  <section className="container author-card">
    <div className="author-wrapper">
      <img src={JuanJavier} alt="Avatar of Juan Javier" />
      <div className="author-text">
        <p className="top">This post was written by Juan Javier Moreno</p>
        <p className="text-grey-dark">You can find him on <a href="https://twitter.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://github.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      </div>
    </div>
  </section>
)

export default AuthorCard

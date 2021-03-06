import React from "react"
import JuanJavier from '../images/JuanJavier.jpeg'

const AuthorCard = () => (
  <section className="container mx-auto mt-16 py-12 px-6 border-t border-b border-solid border-gray-300 author-card">
    <div className="author-wrapper flex items-center">
      <img className="w-20 h-20 rounded-full mr-4" src={JuanJavier} alt="Avatar of Juan Javier" />
      <div className="author-text text-base">
        <p className="leading-none">This post was written by Juan Javier Moreno</p>
        <p className="text-grey-dark">You can find him on <a href="https://twitter.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://github.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      </div>
    </div>
  </section>
)

export default AuthorCard

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"
import ideasIllustration from "../images/undraw_ideas_s70l.svg";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About" bodyclass={'about-page'} />
        <header className="container mx-auto p-6 about-page-header">
          <h1 className="block text-6xl font-bold font-serif">About</h1>
        </header>
        <section className="container mx-auto p-6 about-page-content">
          <div className="flex flex-wrap flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2">
              <p>Hello! My name is Juan Javier and I am a web developer.</p>
              <p>I like the term web developer instead of trying to define myself as a full-stack, back-end, front-end, JavaScript developer, PHP developer, WordPress developer or web designer. I like all of those “roles” but depending on the time, I like to focus more on some of them. For example now, I am focusing on JavaScript, React and Gatsby and how I can move my work to it from WordPress. Although my main daily job is still WordPress related.</p>
              <p>This blog site is part of my Gatsby Challenge. At the starting of this year I committed to learn and code daily something related to Gatsby. The first weekly challenge was building the basics of this blog site.</p>
              <p>The content of this blog will mainly be related to:</p>
              <ul>
                <li>Gatsby development.</li>
                <li>React learning.</li>
                <li>WordPress and specially Gutenberg.</li>
                <li>Front-end development.</li>
                <li>Learning and applying accessibility techniques.</li>
                <li>Tutorials and how-tos on above topics.</li>
                <li>Tracking my learning path progress.</li>
              </ul>
              <p>If you want to contact me you can find me on:</p>
              <ul>
                <li><a href="https://twitter.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">@JuanJavier1979 on Twitter</a></li>
                <li><a href="https://github.com/JuanJavier1979" target="_blank" rel="noopener noreferrer">@JuanJavier1979 on GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/desarrolladorwordpress/?locale=en_US" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <img alt="@JuanJavier ideas" src={ideasIllustration} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default AboutPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.css"
import notFoundIllustration from "../images/undraw_not_found_60pq.svg";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Not found" />
        <section className="container mx-auto p-6 flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full justify-center items-start md:text-left pr-8">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mx-auto mb-8">Nothing found on this page, click here to go to <Link to="/">Homepage</Link>.</h2>
            <img alt="" className="block mx-auto max-w-full md:max-w-lg" src={notFoundIllustration} />
          </div>
        </section>
      </Layout>
    )
  }
}

export default AboutPage
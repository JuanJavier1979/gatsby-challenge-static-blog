import React from "react"
import Layout from "../components/layout"

import '../styles/global.css'

const IndexPage = () => (
  <Layout>
    <section className="container mx-auto p-6 flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <h2 className="font-bold text-6xl">#2020</h2>
      </div>
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        image here
      </div>
      </section>
    <section className="container mx-auto p-6">
      Hello world!
    </section>
  </Layout>
)

export default IndexPage
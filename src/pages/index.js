import React from "react"
import Layout from "../components/layout"
import Top from "../components/top"
import SEO from "../components/seo"
import Header from "../components/header"
import About from "../components/about"
import Events from "../components/events"
import Ashtival from "../components/ashtival"
import Location from "../components/location"
import Contact from "../components/contact"
import Journey from "../components/journey"
import Footer from "../components/footer"
import Upper from "../components/upper"

const IndexPage = () => (
  <Layout>
    <Top />
    <SEO title="Masturbation Records" />
    <Header />
    <Upper/>
    <About />
    <Events />
    <Ashtival />
    <Location />
    <Contact />
    <Journey />
    <Footer />
  </Layout>
)

export default IndexPage

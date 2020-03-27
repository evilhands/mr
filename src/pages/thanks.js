import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style/thanks.css"

const Thanks = () => (
  <Layout>
    <SEO title="Danke für deine E-Mail" />
    <div className="thanks">
      <h1>Danke Dir! Wir werden dich bald kontaktieren.</h1>
      <Link to="/">Zurück</Link>
    </div>
 
  </Layout>
)

export default Thanks

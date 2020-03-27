import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Leider wurde diese Seite nicht gefunden</h1>
    <Link to="/">Zurück</Link>
  </Layout>
)

export default NotFoundPage

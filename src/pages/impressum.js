import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style/impressum.css"

const Impressum = () => (
    <StaticQuery query={graphql`query ImpressumQuery {
        allContentfulImpressum {
        nodes {
          obmann
          obmannStellvertreter
        }
      }
    }`}
        render={data => (
            <>
                {data.allContentfulImpressum.nodes.map(node => (
                    <Layout>
                        <SEO title="Impressum"/>
                        <div className="container impressum">
                            <address>
                                ARGE Alter Schlachthof Hollabrunn<br />
                Josef Weislein-Straße 5<br />
                2020 Gemeinde Hollabrunn<br />
                            </address>
                            <p>
                                Vertreten durch:<br />
        Obmann: {node.obmann}<br />
        Obmann Stellvertreter: {node.obmannStellvertreter}<br />
                            </p>
                            <p>
                                Kontakt: E-Mail: arge.alterschlachthof@gmx.at
        </p>
                            <p>
                                Registereintrag:<br />
        Eintragung im Vereinsregister BH Hollabrunn<br />
        Registernummer: 037760786<br />
                            </p>
                            <Link to="/">Zurück</Link>
                        </div>

                    </Layout>
                ))}
            </>
        )}
    />
)

export default Impressum

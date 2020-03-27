import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./ashtival.css"

const Ashtival = () => (

    <StaticQuery query={graphql`query AshtivalQuery {
        allContentfulAshtival {
          nodes {
            title
          }
        }
      }`
    }
        render={data => (
            <>
                {data.allContentfulAshtival.nodes.map(node => (
                    <section id="ashtival">
                        <h2>Ashtival</h2>
                        <div class="container">
                            <div class="facts">
                                {node.title}
                            </div>
                        </div>
                    </section>
                ))}
            </>
        )}
    />
)

export default Ashtival
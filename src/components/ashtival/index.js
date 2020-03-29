import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./ashtival.css"

const Ashtival = () => (

    <StaticQuery query={graphql`query AshtivalQuery {
        allContentfulAshtival {
          nodes {
            id
            title
          }
        }
      }`
    }
        render={data => (
            <>
                {data.allContentfulAshtival.nodes.map(node => (
                    <section id="ashtival" key={node.id}>
                        <h2>Ashtival</h2>
                        <div className="container">
                            <div className="facts">
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
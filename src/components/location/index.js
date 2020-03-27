import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./location.css"

const Location = () => (

    <StaticQuery query={graphql`
    query LccationQuery {
        allContentfulLocation {
          nodes {
            picture {
              file {
                url
              }
              title
            }
          }
        }
      }`

    }
        render={data => (
            <>
                {data.allContentfulLocation.nodes.map(node => (
                    <section id="location">
                        <h2>Location</h2>
                        <div class="container">
                            <img src={node.picture.file.url} alt={node.picture.title}/>
                        </div>
                    </section>
                ))}
            </>
        )}
    />
)

export default Location
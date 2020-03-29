import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./location.css"

const Location = () => (

    <StaticQuery query={graphql`
    query LccationQuery {
        allContentfulLocation {
          nodes {
            id
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
                    <section id="location" key={node.id}>
                        <h2>Location</h2>
                        <div className="container">
                            <img src={node.picture.file.url} alt={node.picture.title}/>
                        </div>
                    </section>
                ))}
            </>
        )}
    />
)

export default Location
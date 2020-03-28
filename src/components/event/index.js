import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./event.css"

const Event = () => (

    <StaticQuery query={graphql`
    query EventQuery {
        allContentfulEvent 
        (sort: {fields: eventDate})
        {
          nodes {
            ak
            vvk
            vvkLink
            vvkLinkDescription
            flyerLinkDescription
            flyerLink
            flyerDescription
            eventDate(formatString: "dddd, DoMMMM YYYY", locale: "de-at")
            flyer {
              file {
                url
              }
            }
            band {
              website
              name
            }
          }
        }
      }`
    } render={data => (
      <> {data.allContentfulEvent.nodes.map(node => (
        <div className="containerEvent container">
           
                <article className="event">
                    <h3>{node.eventDate}</h3>
                    <a href={node.flyerLink}
                        aria-label={node.flyerLinkDescription}><img src={node.flyer.file.url}
                            alt={node.flyerDescription} />
                    </a>
                    <div class="support">
                    {node.band.map(bands => (
                        <p><a href={bands.website} aria-label={bands.name}>
                            {bands.name}
                        </a></p>
                    ))}
                    </div>
                    <div class="facts">
                        <p><a href={node.vvkLink} aria-label={node.vvkLinkDescription}>VVK {node.vvk}€</a></p>
                        <p>AK {node.ak}€</p>
                    </div>
                </article>
        </div>
         ))
        }
        </>
    )}
    />
)

export default Event
import React from "react"
import { StaticQuery } from "gatsby"
import "./about.css"

const About = () => (

    <StaticQuery query={graphql`query AboutQuery {
        allContentfulAbout {
          edges {
            node {
              header
              childContentfulAboutTextRichTextNode {
                content {
                  content {
                    value
                  }
                }
              }
            }
          }
        }
      }`}
        render={data => (
            <section id="about">
                {data.allContentfulAbout.edges.map(edge => (
                    <article>
                        <p className="header">
                            {edge.node.header}
                        </p>
                        {edge.node.childContentfulAboutTextRichTextNode.content.map(node => (
                            <div>
                                {node.content.map(contents => (
                                    <p>
                                        {contents.value}
                                    </p>

                                ))}
                                 {node.text}
                            </div>
                        ))}
                    </article>
                ))}
            </section>
        )}
    />
)

export default About
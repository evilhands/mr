import React from "react"
import { StaticQuery } from "gatsby"
import "./about.css"

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        allContentfulAbout {
          nodes {
            childContentfulAboutTextRichTextNode {
              id
              content {
                content {
                  value
                }
              }
            }
            id
            header
          }
        }
      }
    `}
    render={data => (
      <section id="about">
        {data.allContentfulAbout.nodes.map(node => (
          <article key={node.id}>
            <p className="header">{node.header}</p>
            {node.childContentfulAboutTextRichTextNode.content.map((texts, i) => (
              <div key={i}>
                {texts.content.map(text => (
                  <p key={text.value}>{text.value}</p>
                ))}
              </div>
            ))}
          </article>
        ))}
      </section>
    )}
  />
)

export default About

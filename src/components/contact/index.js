import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ContactForm from "../contactForm"
import "./contact.css"

const Contact = () => (
    <StaticQuery query={graphql`query ContactQuery {
        allContentfulContact {
          nodes {
            id
            contactperson {
              id
              fullname
              role
              picture {
                file {
                  url
                }
                title
              }
            }
          }
        }
      }`
    }
        render={data => (
            <>
                {data.allContentfulContact.nodes.map(node => (
                    <section id="contact" key={node.id}>
                        <h2>Kontakt</h2>
                        <div className="containerTeam container">
                            {node.contactperson.map(contact => (
                                <article key={contact.id}>
                                    <img src={contact.picture.file.url} alt={contact.picture.title} />
                                    <p className="name">{contact.fullname}</p>
                                    <p className="prof">{contact.role}</p>
                                </article>
                            ))}
                        </div>
                        <ContactForm />
                    </section>
                ))}
            </>
        )}
    />



)

export default Contact
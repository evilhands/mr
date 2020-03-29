import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./footer.css"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterLogoQuery {
        allContentfulLogos {
          nodes {
            id
            footer {
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <footer>
        {data.allContentfulLogos.nodes.map(node => (
          <div className="containerFooter" key={node.id}>
            <div className="containerFooterImg">
              <img className="logo" src={node.footer.file.url} alt="logo" />
            </div>
            <nav className="footer">
              <ul>
                <li className="nav-item">
                  <Link to="/impressum" aria-label="impressum">
                    Impressum
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ))}
      </footer>
    )}
  />
)

export default Footer

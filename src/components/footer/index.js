import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "./footer.css"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterLogoQuery {
        allContentfulLogos {
          nodes {
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
          <div class="containerFooter">
            <div class="containerFooterImg">
              <img class="logo" src={node.footer.file.url} alt="logo" />
            </div>
            <nav class="footer">
              <ul>
                <li class="nav-item">
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

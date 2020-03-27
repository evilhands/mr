import React from "react"
import "./header.css"
import { StaticQuery, graphql } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderLogoQuery {
        allContentfulLogos {
          nodes {
            header {
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        {data.allContentfulLogos.nodes.map(node => (
          <div class="header container">
            <img class="logo" src={node.header.file.url} alt="logo" />
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle" />
            <nav>
              <ul>
                <li class="nav-item">
                  <a href="#about" aria-label="about">
                    Über uns
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#events" aria-label="events">
                    Events
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#ashtival" aria-label="ashtival">
                    Ashtival
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#location" aria-label="location">
                    Location
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#contact" aria-label="contact">
                    Kontakt
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#journey" aria-label="journey">
                    Anfahrt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        ))}
      </header>
    )}
  />
)

export default Header

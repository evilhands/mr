import React from "react"
import "./header.css"
import { StaticQuery, graphql } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
    query HeaderLogoQuery {
      allContentfulLogos {
        nodes {
          id
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
          <div className="containerHeader container" key={node.id}>
            <img className="logo" src={node.header.file.url} alt="logo" />
            <label htmlFor="toggle">&#9776;</label>
            <input type="checkbox" id="toggle" name="toggle" />
            <nav>
              <ul>
                <li className="nav-item">
                  <a href="#about" aria-label="about">
                    Über uns
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#events" aria-label="events">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#ashtival" aria-label="ashtival">
                    Ashtival
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#location" aria-label="location">
                    Location
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" aria-label="contact">
                    Kontakt
                  </a>
                </li>
                <li className="nav-item">
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

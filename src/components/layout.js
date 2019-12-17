/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import MainMenu from "./mainMenu"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa"

// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          facebookURL
          instagramURL
          spotifyURL
          youtubeURL
          patreonURL
          twitterURL
        }
      }
    }
  `)

  return (
    <div>
      <header>
        <MainMenu />
      </header>
      <section className="wrapper">{children}</section>
      <footer className="footer">
        <div className="container">
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                ©2019 Ernesto Schnack. All Rights Reserved.
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <a href={data.site.siteMetadata.facebookURL}>
                  <FaFacebook />
                </a>
              </div>
              <div className="level-item">
                <a href={data.site.siteMetadata.instagramURL}>
                  <FaInstagram />
                </a>
              </div>
              <div className="level-item">
                <a href={data.site.siteMetadata.twitterURL}>
                  <FaTwitter />
                </a>
              </div>
              <div className="level-item">
                <a href={data.site.siteMetadata.youtubeURL}>
                  <FaYoutube />
                </a>
              </div>
              <div className="level-item">
                <a href={data.site.siteMetadata.spotifyURL}>
                  <FaSpotify />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

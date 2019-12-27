import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  FaPatreon,
  FaSpotify,
  FaYoutube,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"
import VideoGrid from "../components/videoGrid"

import SEO from "../components/seo"
import MainMenu from "../components/mainMenu"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" />
    <section className="hero is-fullheight">
      <div className="hero-head">
        <MainMenu />
      </div>

      <div className="hero-body">
        <div className="container">
          <div className="card album">
            <div className="card-image">
              <figure className="image">
                <AniLink
                  cover
                  direction="up"
                  duration={0.5}
                  bg="#333333"
                  to={data.allMarkdownRemark.edges[0].node.fields.slug}
                >
                  <Img
                    fluid={
                      data.allMarkdownRemark.edges[0].node.frontmatter.cover
                        .childImageSharp.fluid
                    }
                  />
                </AniLink>
              </figure>
            </div>
            <div className="card-content">
              <p className="is-uppercase is-size-7 has-text-weight-bold">
                Latest Release:
              </p>
              <h2 className="subtitle">
                {data.allMarkdownRemark.edges[0].node.frontmatter.title}
              </h2>
            </div>
            <div className="card-footer">
              <a
                className="card-footer-item button spotify has-text-white"
                href={
                  "https://open.spotify.com/album/" +
                  data.allMarkdownRemark.edges[0].node.frontmatter.spotify
                }
              >
                <FaSpotify />
                &nbsp;Spotify
              </a>
              <a
                className="card-footer-item button is-light apple"
                href={
                  "https://music.apple.com/album/" +
                  data.allMarkdownRemark.edges[0].node.frontmatter.apple
                }
              >
                <FaApple />
                &nbsp;Apple Music
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li>
                <a className="patreon" href={data.site.siteMetadata.patreonURL}>
                  <FaPatreon />
                  &nbsp;Become a Patron
                </a>
              </li>
              <li>
                <a className="spotify" href={data.site.siteMetadata.spotifyURL}>
                  <FaSpotify />
                </a>
              </li>
              <li>
                <a className="youtube" href={data.site.siteMetadata.youtubeURL}>
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h2 className="subtitle has-text-centered is-uppercase has-text-weight-semibold">
          Latest Videos
        </h2>
        <VideoGrid youtubeData={data.allYoutubeVideo} />
        <AniLink
          cover
          direction="up"
          duration={0.5}
          bg="#333333"
          to="/videos/"
          className="button is-primary is-fullwidth"
        >
          More Videos
        </AniLink>
      </div>
    </section>
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

export const query = graphql`
  query {
    herramientaImage: file(relativePath: { eq: "herramienta-cover-web.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allYoutubeVideo(limit: 8) {
      edges {
        node {
          videoId
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/music/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
            spotify
            apple
            cover {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
        facebookURL
        instagramURL
        spotifyURL
        youtubeURL
        patreonURL
        twitterURL
      }
    }
  }
`

export default IndexPage

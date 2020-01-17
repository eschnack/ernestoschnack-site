import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { MdFileDownload } from "react-icons/md"
import Obfuscate from "react-obfuscate"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <h1 className="title">About</h1>
      <section className="bio">
        <div className="content">
          <figure className="image">
            <Img fluid={data.bioImage.childImageSharp.fluid} />
          </figure>
          <h2>Bio</h2>
          <p>
            Ernesto Schnack is a Panamanian guitarist, composer and producer.
            Known for his acoustic covers and original compositions, Ernesto has
            amassed just under 50,000 subscribers and 7,000,000 views on
            YouTube, and almost a million streams on Spotify in 2019.
          </p>
          <p>
            His original music has been used in various TV and film productions,
            including “Secretos de Confesión” and the short film “
            <a href="https://www.cineanimal.com/alteridad" target="_blank">
              Alteridad+
            </a>
            ”.
          </p>
          <p>
            As a producer, Ernesto has worked with bands and artists such as
            Cabeza de Martillo, Cuz Robles, Gabrielle Herrera, and his own band,
            Hacienda Libre.
          </p>
          <p>
            His most recent releases include the full-length Herramienta, where
            Ernesto interprets the music of progressive metal band Tool on his
            acoustic guitar, and various singles, including his arrangement of
            “Light Of The Seven” from the Game Of Thrones Soundtrack, and covers
            of Deftones and A Perfect Circle.
          </p>
          <p>
            Contact: <Obfuscate email="ernesto@ernestoschnack.com" />
          </p>
        </div>
      </section>
      <section>
        <nav className="level social-box">
          <a
            href={data.site.siteMetadata.facebookURL}
            className="level-item has-text-centered facebook has-text-white"
          >
            <FaFacebookF />
          </a>

          <a
            href={data.site.siteMetadata.instagramURL}
            className="level-item has-text-centered instagram has-text-white"
          >
            <FaInstagram />
          </a>

          <a
            href={data.site.siteMetadata.twitterURL}
            className="level-item has-text-centered twitter has-text-white"
          >
            <FaTwitter />
          </a>

          <a
            href={data.site.siteMetadata.youtubeURL}
            className="level-item has-text-centered youtube has-text-white"
          >
            <FaYoutube />
          </a>
        </nav>
      </section>
      <PhotoGrid thumbs={data.thumbs.edges} fullSize={data.full.edges} />
    </div>
  </Layout>
)

class PhotoGrid extends React.Component {
  render() {
    let dlLinks = [
      "https://www.dropbox.com/s/ad130wymyih12w3/ernesto_schnack-01.jpg?dl=1",
      "https://www.dropbox.com/s/123fij8eh3lb9ai/ernesto_schnack-02.jpg?dl=1",
      "https://www.dropbox.com/s/keknpesygowrlty/ernesto-schnack-03.jpg?dl=1",
      "https://www.dropbox.com/s/uckw1jr0n99wpbt/ernesto-schnack-04.jpg?dl=1",
      "https://www.dropbox.com/s/hbbt7ytedipi6lg/ernesto-schnack-05.jpg?dl=1",
      "https://www.dropbox.com/s/immpyh4isc0kc0g/ernesto-schnack-06.jpg?dl=1",
      "https://www.dropbox.com/s/6ba5lnhwe4rk826/ernesto-schnack-07.jpg?dl=1",
      "https://www.dropbox.com/s/fzc7g3qmjdz4x0c/ernesto-schnack-08.jpg?dl=1",
      "https://www.dropbox.com/s/jkwhxsodl1qnh89/ernesto-schnack-09.jpg?dl=1",
    ]
    let thumbs = this.props.thumbs.map((val, index) => {
      return (
        <PressPhoto
          key={val.node.id}
          thumb={val.node.fluid}
          link={dlLinks[index]}
          full={this.props.fullSize[index].node.fluid}
        />
      )
    })
    return (
      <section className="pics">
        <div className="content">
          <h2 className="subtitle">Photos</h2>
          <div className="columns is-multiline is-flex-mobile">{thumbs}</div>
        </div>
      </section>
    )
  }
}

class PressPhoto extends React.Component {
  state = {
    showModal: false,
  }
  render() {
    console.log(this.props.full)

    if (this.state.showModal == true) {
      return (
        <div className="column is-2 is-one-third-tablet is-half-mobile">
          <div>
            <figure className="image is-marginless">
              <Img fluid={this.props.thumb} />
            </figure>
          </div>
          <div className="modal is-active">
            <div
              className="modal-background"
              onClick={() => this.setState({ showModal: false })}
            ></div>
            <div className="modal-card">
              <section className="modal-card-body">
                <figure className="image">
                  <Img fluid={this.props.full} />
                </figure>
              </section>
              <footer className="modal-card-foot">
                <a
                  href={this.props.link}
                  className="button is-primary is-fullwidth is-medium"
                  target="_blank"
                >
                  <span className="icon">
                    <MdFileDownload />
                  </span>
                  &nbsp; Download
                </a>
              </footer>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => this.setState({ showModal: false })}
            ></button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="column is-2 is-one-third-tablet is-half-mobile">
          <figure
            className="image is-marginless"
            onClick={() => this.setState({ showModal: true })}
          >
            <Img fluid={this.props.thumb} />
          </figure>
        </div>
      )
    }
  }
}

export const query = graphql`
  query {
    bioImage: file(relativePath: { eq: "ernesto_bio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbs: allImageSharp(
      filter: { fluid: { originalName: { regex: "/thumb/" } } }
      sort: { order: ASC, fields: fluid___originalName }
    ) {
      edges {
        node {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
    full: allImageSharp(
      filter: { fluid: { originalName: { regex: "/schnack/" } } }
      sort: { order: ASC, fields: fluid___originalName }
    ) {
      edges {
        node {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
    site {
      siteMetadata {
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

export default AboutPage

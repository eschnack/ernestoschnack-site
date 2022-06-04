import React from "react"
import "../pages/mystyles.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { FaSpotify, FaApple, FaAngleLeft, FaBandcamp } from "react-icons/fa"
import { MdShoppingCart } from "react-icons/md"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AlbumPage = ({ data }) => (
  <Layout>
    <SEO
      title={data.markdownRemark.frontmatter.title}
      image={data.markdownRemark.frontmatter.cover.publicURL}
    />
    <div className="container">
      <div className="album-detail">
        <h1 className="title">
          <AniLink swipe direction="right" to="/music" duration={0.2}>
            <span className="icon">
              <FaAngleLeft />
              &nbsp;
            </span>
          </AniLink>
          {data.markdownRemark.frontmatter.title}
        </h1>

        <div className="container columns">
          <div className="column is two-thirds">
            <figure className="image">
              <Img
                fluid={
                  data.markdownRemark.frontmatter.cover.childImageSharp.fluid
                }
              />
            </figure>
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
          <div className="content column is-one-third">
            <BuyButton buyLink={data.markdownRemark.frontmatter.buy} />
            <iframe
              className="spotify-player"
              src={
                "https://open.spotify.com/embed/album/" +
                data.markdownRemark.frontmatter.spotify
              }
              width="100%"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
            <a
              className="button spotify has-text-white is-fullwidth"
              href={
                "https://open.spotify.com/album/" +
                data.markdownRemark.frontmatter.spotify
              }
            >
              <FaSpotify />
              &nbsp;Spotify
            </a>
            <a
              className="button is-light apple is-fullwidth"
              href={
                "https://music.apple.com/album/" +
                data.markdownRemark.frontmatter.apple
              }
            >
              <FaApple />
              &nbsp;Apple
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

class BuyButton extends React.Component {
  render() {
    if (this.props.buyLink) {
      return (
        <a
          className={"button is-primary is-fullwidth"}
          href={"https://gum.co/" + this.props.buyLink}
        >
          <MdShoppingCart />
          &nbsp;Digital Download
        </a>
      )
    } else {
      return null
    }
  }
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        buy
        spotify
        apple
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default AlbumPage

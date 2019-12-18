import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaSpotify, FaApple } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = ({ data }) => {
  let albums = []
  let singles = []

  data.allMarkdownRemark.edges.map(node => {
    if (node.node.frontmatter.type === "album") {
      albums.push(node)
    } else {
      singles.push(node)
    }
  })

  console.log(albums)
  return (
    <Layout>
      <SEO title="Music" />
      <div className="container">
        <h1 className="title">Music</h1>
        <h2 className="subtitle is-uppercase">Albums</h2>
        <div className="columns is-multiline">
          {albums.map(({ node }) => {
            return (
              <Album
                title={node.frontmatter.title}
                cover={node.frontmatter.cover.childImageSharp.fluid}
                spotify={node.frontmatter.spotify}
                apple={node.frontmatter.apple}
                link={node.fields.slug}
                key={node.id}
                width="column is-one-quarter"
                small=""
              />
            )
          })}
        </div>
        <h2 className="subtitle is-uppercase">Singles</h2>
        <div className="columns is-multiline">
          {singles.map(({ node }) => {
            return (
              <Album
                title={node.frontmatter.title}
                cover={node.frontmatter.cover.childImageSharp.fluid}
                spotify={node.frontmatter.spotify}
                apple={node.frontmatter.apple}
                link={node.fields.slug}
                key={node.id}
                width="column is-one-fifth"
                small="is-small"
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

class Album extends React.Component {
  render() {
    return (
      <div className={this.props.width}>
        <div className="card album">
          <div className="card-image">
            <figure className="image">
              <AniLink
                swipe
                direction="left"
                duration={0.2}
                to={this.props.link}
              >
                <Img fluid={this.props.cover} />
              </AniLink>
            </figure>
          </div>
          <div className="card-content">
            <h2 className="subtitle">{this.props.title}</h2>
          </div>
          <div className="card-footer">
            <a
              className={
                "card-footer-item button spotify has-text-white " +
                this.props.small
              }
              href={"https://open.spotify.com/album/" + this.props.spotify}
            >
              <FaSpotify />
              &nbsp;Spotify
            </a>
            <a
              className={
                "card-footer-item button is-light apple " + this.props.small
              }
              href={"https://music.apple.com/album/" + this.props.apple}
            >
              <FaApple />
              &nbsp;Apple Music
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`

export default MusicPage

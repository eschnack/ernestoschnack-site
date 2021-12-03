import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  FaSpotify,
  FaApple,
  FaAngleDown,
  FaBandcamp,
  FaVolumeDown,
} from "react-icons/fa"
import { MdShoppingCart } from "react-icons/md"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MusicPage = ({ data }) => {
  let albums = []
  let singles = []

  data.allMarkdownRemark.edges.map((node) => {
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
      <div className="container music">
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
                buy={node.frontmatter.buy}
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
                buy={node.frontmatter.buy}
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
    let buyButton
    if (this.props.buy) {
      buyButton = <BuyButton buyLink={this.props.buy} />
    } else {
      buyButton = ""
    }
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
            {buyButton}

            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button
                  class="button is-fullwidth is-light"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <FaVolumeDown /> Listen <FaAngleDown />
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a
                    href={
                      "https://open.spotify.com/album/" + this.props.spotify
                    }
                    class="dropdown-item"
                  >
                    <FaSpotify />
                    &nbsp;Spotify
                  </a>
                  <a
                    href={"https://music.apple.com/album/" + this.props.apple}
                    class="dropdown-item"
                  >
                    <FaApple />
                    &nbsp;Apple
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class BuyButton extends React.Component {
  render() {
    return (
      <a
        className={"button is-primary is-fullwidth"}
        href={"https://gum.co/" + this.props.buyLink}
      >
        <MdShoppingCart />
        &nbsp;Buy
      </a>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/music/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
            buy
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

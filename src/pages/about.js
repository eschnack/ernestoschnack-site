import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

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

          <p>
            Combine the hauntingly beautiful sounds and guitar-work of Michael
            Hedges with Tool’s dark polyrhythms, and you start to get an idea of
            where Ernesto Schnack is coming from. His music is a blend of
            bittersweet melodies, polyethnic grooves and metal-influenced
            intensity, all channeled through one acoustic guitar.
          </p>
          <p>
            Hailing originally from Panama, Ernesto has spent his last few years
            developing his unique musical voice while living in Berlin. His
            goal: to meld his love for metal and his composition studies at
            Berklee College of Music with his passion for the acoustic guitar.
            Released in 2011, his album A Work in Progress was the first step in
            that direction.
          </p>
          <p>
            His arrangements of other songs, like “Forty-Six &amp; 2” by Tool
            and the theme from the TV show Game of Thrones, also helped Ernesto
            hone his new sound, while also finding him a dedicated audience
            online through YouTube. His technically demanding yet moving
            renditions have been attracting and inspiring guitar fans from all
            over the world.
          </p>
          <p>
            Which all leads to his new album Worldbuilding. Inspired by the
            imagery found in epic fantasy novels and comics, Worldbuilding is
            filled with melancholy melodies and ambient textures that grow into
            a full-on metal assault when you least expect it. The album closer,
            a cover of Tool’s “Right in Two,” perfectly encapsulates how Ernesto
            balances delicate fingerpicking with moments of raw aggression not
            often found in acoustic guitar music.
          </p>
          <p>
            2014 should be a promising year for Ernesto. He’ll continue to
            promote his new album while simultaneously releasing more new music,
            both original songs and covers. His hope is to build on his new
            sound and take it in new directions.
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
      <section className="pics">
        <div className="content">
          <h2 className="subtitle">Photos</h2>
          <div className="columns is-multiline is-flex-mobile">
            <PressPhoto
              thumb={data.thumb1.childImageSharp.fluid}
              link="https://www.dropbox.com/s/123fij8eh3lb9ai/ernesto_schnack-02.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb2.childImageSharp.fluid}
              link="https://www.dropbox.com/s/ad130wymyih12w3/ernesto_schnack-01.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb3.childImageSharp.fluid}
              link="https://www.dropbox.com/s/keknpesygowrlty/ernesto-schnack-03.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb4.childImageSharp.fluid}
              link="https://www.dropbox.com/s/uckw1jr0n99wpbt/ernesto-schnack-04.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb5.childImageSharp.fluid}
              link="https://www.dropbox.com/s/hbbt7ytedipi6lg/ernesto-schnack-05.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb6.childImageSharp.fluid}
              link="https://www.dropbox.com/s/immpyh4isc0kc0g/ernesto-schnack-06.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb7.childImageSharp.fluid}
              link="https://www.dropbox.com/s/6ba5lnhwe4rk826/ernesto-schnack-07.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb8.childImageSharp.fluid}
              link="https://www.dropbox.com/s/fzc7g3qmjdz4x0c/ernesto-schnack-08.jpg?dl=1"
            />
            <PressPhoto
              thumb={data.thumb9.childImageSharp.fluid}
              link="https://www.dropbox.com/s/jkwhxsodl1qnh89/ernesto-schnack-09.jpg?dl=1"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

class PressPhoto extends React.Component {
  render() {
    return (
      <div className="column is-2 is-one-third-tablet is-half-mobile">
        <figure className="image is-marginless">
          <a href={this.props.link}>
            <Img fluid={this.props.thumb} />
          </a>
        </figure>
      </div>
    )
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
    thumb1: file(relativePath: { eq: "ernesto_thumb_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb2: file(relativePath: { eq: "ernesto_thumb_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb3: file(relativePath: { eq: "ernesto_thumb_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb4: file(relativePath: { eq: "ernesto_thumb_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb5: file(relativePath: { eq: "ernesto_thumb_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb6: file(relativePath: { eq: "ernesto_thumb_6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb7: file(relativePath: { eq: "ernesto_thumb_7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb8: file(relativePath: { eq: "ernesto_thumb_8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumb9: file(relativePath: { eq: "ernesto_thumb_9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
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

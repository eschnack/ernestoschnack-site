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
      <section class="bio">
        <div className="content">
          <figure className="image">
            <Img fluid={data.bioImage.childImageSharp.fluid} />
          </figure>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            placerat, elit vel suscipit tincidunt, magna massa vulputate ligula,
            non elementum ipsum lacus et diam. Suspendisse dapibus finibus odio,
            quis vestibulum elit iaculis ut. Quisque posuere porta augue quis
            facilisis. Phasellus faucibus metus mi, non volutpat metus laoreet
            euismod. Etiam mattis arcu ac dolor suscipit luctus sed id tortor.
            Ut nunc lorem, facilisis ac tempus eget, fringilla eget turpis.
            Maecenas dictum euismod sapien, sed condimentum lorem gravida a. Nam
            nisi arcu, fermentum eget erat eget, tempus auctor mauris. Ut id
            gravida nisl. Etiam sed pellentesque dui. Sed lectus justo, varius
            eget sem vel, scelerisque dignissim diam. In dapibus metus ac enim
            fermentum euismod. Fusce eros diam, dictum eget magna egestas,
            suscipit euismod eros. Fusce viverra non magna ut dictum. Quisque
            euismod vulputate nulla sed bibendum. Suspendisse potenti.
          </p>
          <p>
            Sed non massa a odio sagittis porta. Mauris tincidunt leo orci,
            dapibus sagittis neque ullamcorper eget. Quisque gravida, ex et
            sagittis dapibus, ligula neque elementum lectus, eu viverra nulla
            arcu sed neque. Sed convallis facilisis lectus, ut venenatis arcu
            faucibus nec. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Pellentesque sed leo vehicula ante iaculis rhoncus. Aenean
            vel ligula at ipsum luctus tempor nec et magna. Pellentesque
            accumsan metus non eleifend finibus. Vestibulum fermentum at nulla
            in facilisis. In elementum elit urna, ac auctor mauris rutrum
            ornare. Morbi tincidunt ligula ex, sit amet dictum leo pulvinar ut.
            Suspendisse dapibus dolor eu nisl tincidunt, eget rutrum quam
            rhoncus. Integer nec leo vitae metus imperdiet egestas quis vitae
            mi. Quisque in tortor consectetur, rutrum odio quis, ornare velit.
            Nam quis accumsan tortor. Duis eu aliquet ligula.
          </p>
        </div>
      </section>
      <section>
        <nav class="level social-box">
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
      <section class="pics">
        <div className="content">
          <h2 class="subtitle">Photos</h2>
          <div className="columns is-multiline">
            <PressPhoto thumb={data.thumb1.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb2.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb3.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb4.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb5.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb6.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb7.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb8.childImageSharp.fluid} />
            <PressPhoto thumb={data.thumb9.childImageSharp.fluid} />
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
          <a href="#">
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

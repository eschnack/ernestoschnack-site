import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { MdFileDownload } from "react-icons/md"
import Obfuscate from "react-obfuscate"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

import SEO from "../components/seo"

const LivePage = ({ data }) => (
  <Layout>
    <SEO title="Live" />
    <Helmet>
      <script
        charset="utf-8"
        src="https://widgetv3.bandsintown.com/main.min.js"
      ></script>
    </Helmet>
    <div className="container">
      <a
        class="bit-widget-initializer"
        data-artist-name="id_424528"
        data-background-color="#ffffff"
        data-separator-color="#DDDDDD"
        data-text-color="#424242"
        data-font="Helvetica"
        data-auto-style="true"
        data-display-local-dates="false"
        data-local-dates-position="tab"
        data-display-past-dates="true"
        data-display-details="false"
        data-display-lineup="false"
        data-display-start-time="false"
        data-social-share-icon="true"
        data-display-limit="all"
        data-date-format="MMM. D, YYYY"
        data-date-orientation="horizontal"
        data-date-border-color="#08C3BA"
        data-date-border-width="1px"
        data-date-border-radius="10px"
        data-event-ticket-cta-size="medium"
        data-event-ticket-text="TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color="#FFFFFF"
        data-event-ticket-cta-bg-color="#08C3BA"
        data-event-ticket-cta-border-color="#08C3BA"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="4px"
        data-sold-out-button-text-color="#FFFFFF"
        data-sold-out-button-background-color="#9B9B9B"
        data-sold-out-button-border-color="#08C3BA"
        data-sold-out-button-clickable="true"
        data-event-rsvp-position="left"
        data-event-rsvp-cta-size="medium"
        data-event-rsvp-text="SET REMINDER"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color="#08C3BA"
        data-event-rsvp-cta-bg-color="#FFFFFF"
        data-event-rsvp-cta-border-color="#08C3BA"
        data-event-rsvp-cta-border-width="1px"
        data-event-rsvp-cta-border-radius="4px"
        data-follow-section-position="top"
        data-follow-section-alignment="center"
        data-follow-section-header-text="Get updates on new shows."
        data-follow-section-cta-size="medium"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="true"
        data-follow-section-cta-text-color="#FFFFFF"
        data-follow-section-cta-bg-color="#08C3BA"
        data-follow-section-cta-border-color="#08C3BA"
        data-follow-section-cta-border-width="0px"
        data-follow-section-cta-border-radius="4px"
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="Center"
        data-play-my-city-header-text="I'm currently only doing livestreams every Sunday, but let me know if you'd like me to play in your town!"
        data-play-my-city-cta-size="medium"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="true"
        data-play-my-city-cta-text-color="#FFFFFF"
        data-play-my-city-cta-bg-color="#08C3BA"
        data-play-my-city-cta-border-color="#08C3BA"
        data-play-my-city-cta-border-width="0px"
        data-play-my-city-cta-border-radius="4px"
        data-language="en"
        data-widget-width=""
        data-div-id=""
        data-app-id=""
        data-affil-code="undefined"
        data-bit-logo-position="bottomRight"
        data-bit-logo-color="#CCCCCC"
      ></a>
    </div>
  </Layout>
)

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

export default LivePage

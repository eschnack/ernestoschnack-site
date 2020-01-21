import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"

import VideoGrid from "../components/videoGrid"

import Layout from "../components/layout"

import SEO from "../components/seo"

const VideosPage = ({ data }) => (
  <Layout>
    <SEO title="Videos" />
    <div className="container">
      <h1 className="title">Videos</h1>
      <VideoGrid limit="52" />
    </div>
  </Layout>
)
/*
export const query = graphql`
  query {
    allYoutubeVideo(
      filter: {
        videoId: {
          nin: [
            "aJ_xLhdQOrU"
            "7Iih4eM8FM8"
            "7Z4ZHjP4kFI"
            "fSPY9e3tIV0"
            "bRl0Bt9urw4"
            "ZseBhYzjEeY"
            "Qu_3NA5xozg"
            "I9LcgL4oxAA"
            "U91BJrbKDgQ"
            "0iMSwPecreM"
            "gdspCcN3_og"
            "XOzVm4nF7YY"
            "bw1Tu4oCbSQ"
            "2fJofrbeZWM"
            "KYP8vjEN40I"
            "_FTEPUiLEJY"
            "I2e0YGh-Q_U"
            "kgHn4CkuTo0"
          ]
        }
      }
    ) {
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
  }
`
*/
export default VideosPage

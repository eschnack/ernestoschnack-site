import React from "react"
import VideoModal from "./videoModal"
import { StaticQuery, graphql } from "gatsby"

class VideoGrid extends React.Component {
  render() {
    let youtubeArray = Object.values(this.props.data.allYoutubeVideo.edges)
    let videos = youtubeArray.map((val, index) => {
      if (index < this.props.limit)
        return <VideoModal key={val.node.videoId} videoData={val} />
      else return
    })
    return <div className="columns is-multiline video-grid">{videos}</div>
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allYoutubeVideo(
          filter: {
            videoId: {
              in: [
                "iTjcXxPmZG0"
                "ZcXmBTcU1uA"
                "714tcxsXook"
                "HHvcCs18bnY"
                "ndFiD-Bcyus"
                "mAG139mBtg0"
                "POiqCHeeQvg"
                "8OocjGxAtHw"
                "OzBWif7q290"
                "tyUPeHN_oZ4"
                "oxwzC2PMpIU"
                "jvr1530YP-I"
                "fyDA6CTVqgw"
                "cP0aWmloMDg"
                "bDkqnlQb-40"
                "rt6e-TLvO3A"
                "HC1u2Ezu6LQ"
                "zhvwfgTerAU"
                "OYVx5MIwmMU"
                "SdGlyTpJMqY"
                "9NVkOHEaD0I"
                "XNq5w9WHEmg"
                "vZjy2Up9Xtk"
                "vDp6nYiAufg"
                "20rdQ0jgv4I"
                "2zPTKVQzbnE"
                "MBlSu2SaMiU"
                "nctK0ySsw80"
                "u68Zb5NDXR0"
                "rYmUkK1LC6k"
                "FwoNDVXnF1Y"
                "kGAjOAuuXj4"
                "n5vBtiXXf8Q"
                "zYKI_cT2ezc"
                "25NsLq3XXhw"
                "tIG30NgsAqM"
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
    `}
    render={data => <VideoGrid data={data} {...props} />}
  />
)

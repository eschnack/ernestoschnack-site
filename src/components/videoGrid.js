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

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        allYoutubeVideo(
          filter: {
            videoId: {
              in: [
                "V5tLbq_xz1c"
                "0TrwwPtfG3A"
                "fcopvQ6hPpw"
                "gyNJS2CQ0Nw"
                "lUuBh-236Do"
                "eZE-Gb4ViVg"
                "GxiPQz1mT4Q"
                "B0QXQ5D6-bc"
                "4wtU6U_rSys"
                "lJ5KMqL8UDo"
                "rfq_DMeYVYE"
                "YxcPeNntH2w"
                "Uy5lXaXIQiA"
                "oShb_oO5Y80"
                "LM-iah-TVa8"
                "XNuZmqcLjzM"
                "o3K1SUa91ck"
                "eSD8EwwFnr8"
                "7POA_K5uXm8"
                "kZKIwozGEx8"
                "F_1hQnorEGA"
                "m6v7A6cYS7M"
                "Q-MVwosff80"
                "TXUH8Zf1Zvw"
                "yaeanoe_TU8"
                "A2n2IpD00nA"
                "E-C1aGEVBng"
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
    render={(data) => <VideoGrid data={data} {...props} />}
  />
)

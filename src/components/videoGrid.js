import React from "react"
import VideoModal from "./videoModal"

class VideoGrid extends React.Component {
  render() {
    let youtubeArray = Object.values(this.props.youtubeData.edges)
    let videos = youtubeArray.map(val => {
      return <VideoModal key={val.node.videoId} videoData={val} />
    })
    return <div className="columns is-multiline">{videos}</div>
  }
}

export default VideoGrid

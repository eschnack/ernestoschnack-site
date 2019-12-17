import React from "react"
import Img from "gatsby-image"
import { FaYoutube } from "react-icons/fa"

class VideoModal extends React.Component {
  state = {
    showModal: false,
  }
  render() {
    let videoData = this.props.videoData.node
    if (this.state.showModal == true) {
      return (
        <div className="column is-one-quarter-desktop is-one-third-tablet">
          <div>
            <figure className="image">
              <Img fluid={videoData.localThumbnail.childImageSharp.fluid} />
            </figure>
          </div>
          <div className="modal is-active">
            <div
              className="modal-background"
              onClick={() => this.setState({ showModal: false })}
            ></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <h2 className="subtitle">{videoData.title}</h2>
              </header>
              <section className="modal-card-body">
                <div className="embed-container">
                  <iframe
                    src={"https://www.youtube.com/embed/" + videoData.videoId}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
              <footer className="modal-card-foot">
                <a
                  href="https://www.youtube.com/channel/UCz1PeIEiNkKRwWDKFA6RkzQ?sub_confirmation=1"
                  className="button youtube is-fullwidth has-text-white is-medium"
                  target="_blank"
                >
                  <span className="icon">
                    <FaYoutube />
                  </span>
                  &nbsp;Subscribe
                </a>
              </footer>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={() => this.setState({ showModal: false })}
            ></button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="column is-one-quarter-desktop is-one-third-tablet">
          <div onClick={() => this.setState({ showModal: true })}>
            <figure className="image">
              <Img fluid={videoData.localThumbnail.childImageSharp.fluid} />
            </figure>
          </div>
        </div>
      )
    }
  }
}

export default VideoModal

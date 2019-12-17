import React from "react"
import "../mystyles.scss"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaSpotify, FaApple } from "react-icons/fa"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import MainMenu from "../../components/mainMenu"

const EpkPage = ({ data }) => (
  <Layout>
    <h1 className="title">EPK</h1>
  </Layout>
)

export default EpkPage

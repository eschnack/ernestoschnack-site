import React from "react"
import "./mystyles.scss"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { MdFileDownload, MdShoppingCart } from "react-icons/md"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { Helmet } from "react-helmet"

class MerchPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Tabs" />
        <div className="container">
          <h1 className="title">Tabs</h1>
          <section className="section tab-bundles">
            <div className="container columns">
              <BundleCard
                name={"Heavy 2.0 T-Shirt"}
                description={"Unisex T-shirt with Heavy 2.0 Pick artwork"}
                cta={"Buy"}
                img={this.props.data.heavyImage.childImageSharp.fluid}
                pid={"isFbU"}
              />

              <BundleCard
                name={"Heavy 2.0 Hoodie"}
                description={"Unisex hoodie with Heavy 2.0 Pick artwork"}
                cta={"Buy"}
                img={this.props.data.heavyHoodieImage.childImageSharp.fluid}
                pid={"cGWLP"}
              />

              <BundleCard
                name={"One Man Band T-Shirt"}
                description={"Unisex T-shirt with One Man Band artwork"}
                cta={"Buy"}
                img={this.props.data.ombImage.childImageSharp.fluid}
                pid={"yisOs"}
              />

              <BundleCard
                name={"Ernesto Schnack Logo T-Shirt"}
                description={"Unisex T-shirt with Ernesto Schnack logo"}
                cta={"Buy"}
                img={this.props.data.logoImage.childImageSharp.fluid}
                pid={"IFIzs"}
              />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

class BundleCard extends React.Component {
  render() {
    return (
      <div className="card column is-one-third merch">
        <div className="card-content">
          <div className="card-image">
            <figure className="image is-fullwidth">
              <a href={"https://gum.co/" + this.props.pid}>
                <Img fluid={this.props.img} />
              </a>
            </figure>
          </div>

          <div className="content">
            <h3 className="subtitle">{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
        <footer className="card-footer">
          <a
            className="button is-primary card-footer-item"
            href={"https://gum.co/" + this.props.pid}
          >
            <span className="icon">
              <MdShoppingCart />
            </span>
            &nbsp;{this.props.cta}
          </a>
        </footer>
      </div>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        heavyHoodieImage: file(relativePath: { eq: "heavyhoodie.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ombImage: file(relativePath: { eq: "omb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heavyImage: file(relativePath: { eq: "heavy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logoImage: file(relativePath: { eq: "logo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <MerchPage data={data} {...props} />}
  />
)

import React from "react"
import "./mystyles.scss"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { MdFileDownload, MdShoppingCart, MdOutbound } from "react-icons/md"
import { HiOutlineExternalLink } from "react-icons/hi"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { Helmet } from "react-helmet"

class TabsPage extends React.Component {
  render() {
    let filterObj = {
      all: { name: "All" },
      tool: { name: "Tool" },
      got: { name: "Game Of Thrones" },
      og: { name: "Original" },
      other: { name: "Other" },
      free: { name: "Free" },
    }

    let tabList = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Tabs" />
        <div className="container">
          <h1 className="title">Tabs</h1>
          <section className="section tab-bundles">
            <div className="container columns">
              <BundleCard
                name={"Worldbuilding"}
                description={
                  "Tabs for all the songs on the Worldbuilding album."
                }
                cta={"Buy - $21.00"}
                img={this.props.data.wbImage.childImageSharp.fluid}
                pid={"WXUT"}
              />
            </div>
          </section>
          <SingleTabs filterTabs={filterObj} tabs={tabList} />
        </div>
      </Layout>
    )
  }
}

class BundleCard extends React.Component {
  render() {
    if (this.props.pid === "free") {
      return (
        <div className="card column is-one-third tab-bundle">
          <div className="card-content">
            <div className="card-image">
              <figure className="image is-fullwidth">
                <Img fluid={this.props.img} />
              </figure>
            </div>

            <div className="content">
              <h3 className="subtitle">{this.props.name}</h3>
              <p>{this.props.description}</p>
            </div>
          </div>
          <footer className="card-footer">
            <Link to="/signup" className="button is-primary card-footer-item">
              <span className="icon">
                <MdFileDownload />
              </span>
              &nbsp; {this.props.cta}
            </Link>
          </footer>
        </div>
      )
    } else {
      return (
        <div className="card column is-one-third tab-bundle">
          <div className="card-content">
            <div className="card-image">
              <figure className="image is-fullwidth">
                <Img fluid={this.props.img} />
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
}

class SingleTabs extends React.Component {
  state = {
    active: "All",
  }

  handleClick(value) {
    this.setState({ active: value })
  }
  render() {
    let tabs = Object.values(this.props.filterTabs).map((val) => {
      return (
        <li
          className={val.name === this.state.active ? "is-active" : ""}
          onClick={() => this.handleClick(val.name)}
          key={val.name}
        >
          <a>
            <span>{val.name}</span>
          </a>
        </li>
      )
    })

    let tabList = this.props.tabs

    let tabListSorted = tabList.map((val) => {
      if (this.state.active === "All") {
        return (
          <SingleTab
            name={val.node.frontmatter.title}
            cta={val.node.frontmatter.cta}
            key={val.node.id}
            url={val.node.frontmatter.url}
          />
        )
      } else if (
        this.state.active === "Free" &&
        val.node.frontmatter.cta === "free"
      ) {
        return (
          <SingleTab
            name={val.node.frontmatter.title}
            cta={val.node.frontmatter.cta}
            key={val.node.id}
          />
        )
      } else if (this.state.active === val.node.frontmatter.type) {
        return (
          <SingleTab
            name={val.node.frontmatter.title}
            cta={val.node.frontmatter.cta}
            key={val.node.id}
            url={val.node.frontmatter.url}
          />
        )
      }
    })

    return (
      <section className="section single-tabs">
        <h2 className="subtitle is-uppercase is-bold">Individual Tabs</h2>
        <div className="tabs is-right is-boxed is-small">
          <ul>{tabs}</ul>
        </div>
        {tabListSorted}
      </section>
    )
  }
}

class SingleTab extends React.Component {
  render() {
    if (this.props.cta === "free") {
      return (
        <nav className="level tool is-marginless">
          <div className="level-left">
            <div className="level-item">
              <h3>{this.props.name}</h3>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <Link to="/signup" className="button is-primary">
                <span className="icon">
                  <MdFileDownload />
                </span>
                &nbsp;Free Download
              </Link>
            </div>
          </div>
        </nav>
      )
    } else if (this.props.cta === "musicnotes") {
      return (
        <nav className="level tool is-marginless">
          <div className="level-left">
            <div className="level-item">
              <h3>{this.props.name}</h3>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <a
                className="button is-primary"
                href={this.props.url}
                target="_blank"
              >
                Buy on Musicnotes &nbsp;
                <span className="icon">
                  <HiOutlineExternalLink />
                </span>
              </a>
            </div>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="level tool is-marginless">
          <div className="level-left">
            <div className="level-item">
              <h3>{this.props.name}</h3>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <a
                className="button is-primary"
                href={"https://gum.co/" + this.props.cta}
              >
                <span className="icon">
                  <MdShoppingCart />
                </span>
                &nbsp;Buy
              </a>
            </div>
          </div>
        </nav>
      )
    }
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        herramientaImage: file(
          relativePath: { eq: "herramienta-bundle-2.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wbImage: file(relativePath: { eq: "wb-bundle-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        freeImage: file(relativePath: { eq: "free-bundle.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "/tabs/" } } }
          sort: { fields: [frontmatter___title], order: ASC }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                cta
                type
                url
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data) => <TabsPage data={data} {...props} />}
  />
)

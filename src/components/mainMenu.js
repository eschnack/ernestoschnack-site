import { Link } from "gatsby"
import React from "react"
import logo from "../images/logohori.png"
//import AniLink from "gatsby-plugin-transition-link/AniLink"

import { StaticQuery, graphql } from "gatsby"

class MainMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  handleClick() {
    if (this.state.active === true) {
      this.setState({ active: false })
    } else {
      this.setState({ active: true })
    }
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <h1>
              <MenuLink to="/">
                <img src={logo} alt="Ernesto Schnack" />
              </MenuLink>
            </h1>
            <span
              className={
                this.state.active === true
                  ? "navbar-burger burger is-active"
                  : "navbar-burger burger"
              }
              data-target="navbarMenuHeroA"
              onClick={() => this.handleClick()}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenuHeroA"
            className={
              this.state.active ? "navbar-menu is-active" : "navbar-menu"
            }
          >
            <div className="navbar-end">
              <MenuLink to="/music/">Music</MenuLink>
              <MenuLink to="/tabs/">Tabs</MenuLink>
              <MenuLink to="/merch/">Merch</MenuLink>
              <MenuLink to="/live/">Live</MenuLink>
              <MenuLink to="/videos/">Videos</MenuLink>
              <MenuLink to="/about/">About</MenuLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

class MenuLink extends React.Component {
  render() {
    return (
      <Link
        to={this.props.to}
        bg="#333333"
        className="navbar-item"
        activeClassName="is-active"
      >
        {this.props.children}
      </Link>
    )
  }
}

export default MainMenu

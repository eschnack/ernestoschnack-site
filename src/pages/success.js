import React from "react"
import "./mystyles.scss"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

import { IoMdArrowDropleftCircle } from "react-icons/io"

const Success = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container success">
      <h1 className="title">Message received!</h1>
      <section>
        <div className="content">
          <p>
            Thanks for getting in touch. I'll get back to you as soon as
            possible.
          </p>
          <p>
            <Link to="/" className="button is-primary">
              <IoMdArrowDropleftCircle />
              &nbsp;Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success

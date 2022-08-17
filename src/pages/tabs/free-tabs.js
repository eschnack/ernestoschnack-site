import React from "react"
import "../mystyles.scss"

import Layout from "../../components/layout"
import { Link } from "gatsby"
import SEO from "../../components/seo"

import { IoMdArrowDropleftCircle } from "react-icons/io"

const FreeTabs = () => (
  <Layout>
    <SEO title="Free Tabs" follow="none" />
    <div className="container success">
      <section>
        <div className="content">
          <div className="box free-tabs">
            <h3>Game Of Thrones</h3>
            <ul>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Game_of_Thrones-Ernesto_Schnack.pdf">
                  Game Of Thrones
                </a>
              </li>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Rains-of-Castamere-Full-Score.pdf">
                  Rains Of Castamere
                </a>
              </li>
            </ul>
          </div>
          <div className="box free-tabs">
            <h3>Others</h3>
            <ul>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/The_Savage_Myth.zip">
                  The Savage Myth
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default FreeTabs

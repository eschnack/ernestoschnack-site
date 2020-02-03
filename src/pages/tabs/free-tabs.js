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
      <h1 className="title">Thanks for signing up!</h1>
      <section>
        <div className="content">
          <p>
            Here are all the free tabs available so far. Bookmark this link so
            you can come back to it at any time.
          </p>
          <div className="box free-tabs">
            <h3>Tool/A Perfect Circle</h3>
            <ul>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Forty_Six_and_2-Ernesto_Schnack.zip">
                  Forty Six & 2
                </a>
              </li>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Sober-Ernesto_Schnack.zip">
                  Sober
                </a>
              </li>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Judith-Ernesto_Schnack.zip">
                  Judith
                </a>
              </li>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Orestes-Ernesto_Schnack.zip">
                  Orestes
                </a>
              </li>
            </ul>
          </div>
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
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/The_Bear_and_the_Maiden_Fair-Ernesto_Schnack.zip">
                  The Bear And The Maiden Fair
                </a>
              </li>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Goodbye_Brother-Ernesto_Schnack.pdf">
                  Goodbye Brother
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
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Digital_Bath-Ernesto_Schnack.zip">
                  Digital Bath
                </a>
              </li>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Leftovers-Ernesto_Schnack.zip">
                  The Leftovers - Departure
                </a>
              </li>
              <li>
                <a href="https://f002.backblazeb2.com/file/eschnack-downloads/Imperial_March-Ernesto_Schnack.zip">
                  Star Wars - Imperial March
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

import React from "react"
import "./mystyles.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { MdFileDownload } from "react-icons/md"
import Obfuscate from "react-obfuscate"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Shipping Policies" />
    <div className="container">
      <h1 className="title">Shipping Policies</h1>
      <section className="bio">
        <div className="content">
          <h2>Delivery</h2>

          <p>
            <strong>When will I get my order?</strong>
          </p>
          <p>
            Usually, it takes 3–7 days to fulfill an order, after which it’s
            shipped out. The shipping time depends on your location, but can be
            estimated as follows:
          </p>
          <ul>
            <li>USA: 3–4 business days</li>
            <li>Europe: 6–8 business days</li>
            <li>Australia: 2–14 business days</li>
            <li>Japan: 4–8 business days</li>
            <li>International: 10–20 business days</li>
          </ul>
          <p>
            <strong>Where will my order ship from?</strong>
          </p>
          <p>
            We work with an on-demand order fulfillment company with facilities
            worldwide!
          </p>
          <p>
            <strong>Will I be charged customs for my order?</strong>
          </p>
          <p>
            An additional customs and tax fee can occur on international orders.
            This fee is not in our control and is assessed by your local customs
            office. Customs policies vary widely for every country so please
            check with your local customs office directly to see if they apply
            duties and taxes to your purchases.
          </p>
          <p>
            <strong>
              My order should be here by now, but I still don't have it. What
              should I do?
            </strong>
          </p>
          <p>
            Before getting in touch with us, please help us out by doing the
            following:
          </p>
          <ul>
            <li>
              Check your shipping confirmation email for any mistakes in the
              delivery address
            </li>
            <li>Ask your local post office if they have your package</li>
            <li>
              Stop by your neighbors in case the courier left the package with
              them
            </li>
          </ul>
          <p>
            If the shipping address was correct, and the package wasn't left at
            the post office or at your neighbor’s, get in touch with us at
            [insert your support email here] with your order number.
          </p>
          <p>
            If you did find a mistake in your delivery address, we can send you
            a replacement order, but shipping will be at your own cost.
          </p>
          <h2>Orders</h2>
          <p>
            <strong>How are your products made?</strong>
          </p>
          <p>
            We work with a print-on-demand drop shipper. They have locations
            worldwide, so depending on where you are, your orders are printed
            and shipped from the facility that can do it most efficiently!
          </p>
          <p>How do I track my order?</p>
          <p>
            You’ll receive a tracking link via email when your order ships out.
            If you have any questions about your tracking or shipment, drop us a
            line at <Obfuscate email="ernesto@ernestoschnack.com" />.
          </p>
          <p>I received a wrong/damaged product, what should I do?</p>
          <p>
            We’re so sorry if the product you ordered arrived damaged. To help
            us resolve this for you quickly, please email us at{" "}
            <Obfuscate email="ernesto@ernestoschnack.com" /> within a weeks'
            time with photos of the damaged product, your order number, and any
            other details you may have about your order. We’ll get back to you
            with a resolution as soon as possible!
          </p>
          <h2>Returns</h2>
          <p>
            <strong>What’s your return policy?</strong>
          </p>
          <p>
            We don’t offer returns and exchanges, but if there’s something wrong
            with your order, please let us know by contacting us at{" "}
            <Obfuscate email="ernesto@ernestoschnack.com" />!
          </p>
          <p>
            <strong>Do you offer refunds?</strong>
          </p>
          <p>
            Refunds are only offered to customers that receive the wrong items
            or damaged items. If any of these apply, please contact us at{" "}
            <Obfuscate email="ernesto@ernestoschnack.com" /> with photos of
            wrong/damaged items and we’ll sort that out for you.
          </p>
          <p>
            <strong>Can I exchange an item for a different size/color?</strong>
          </p>
          <p>
            At this time, we don't offer exchanges. If you’re unsure which size
            would fit better, check out our sizing charts—we have one for every
            item listed on our store, in the product description section. Though
            rare, it's possible that an item you ordered was mislabelled. If
            that’s the case, please let us know at{" "}
            <Obfuscate email="ernesto@ernestoschnack.com" /> within a week after
            receiving your order. Include your order number and photos of the
            mislabeled item, and we’ll send you a new one, or issue a refund!
          </p>
          <h2>Return Policy</h2>

          <p>
            Any claims for misprinted/damaged/defective items must be submitted
            within 4 weeks after the product has been received. For packages
            lost in transit, all claims must be submitted no later than 4 weeks
            after the estimated delivery date. Claims deemed an error on our
            part are covered at our expense.
          </p>

          <p>
            Wrong Address - If you provide an address that is considered
            insufficient by the courier, the shipment will be returned to our
            facility. You will be liable for reshipment costs once we have
            confirmed an updated address with you (if and as applicable).
          </p>

          <p>
            Unclaimed - Shipments that go unclaimed are returned to our facility
            and you will be liable for the cost of a reshipment (if and as
            applicable).
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    bioImage: file(relativePath: { eq: "ernesto_bio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbs: allImageSharp(
      filter: { fluid: { originalName: { regex: "/thumb/" } } }
      sort: { order: ASC, fields: fluid___originalName }
    ) {
      edges {
        node {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
    full: allImageSharp(
      filter: { fluid: { originalName: { regex: "/schnack/" } } }
      sort: { order: ASC, fields: fluid___originalName }
    ) {
      edges {
        node {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
          id
        }
      }
    }
    site {
      siteMetadata {
        facebookURL
        instagramURL
        spotifyURL
        youtubeURL
        patreonURL
        twitterURL
      }
    }
  }
`

export default AboutPage

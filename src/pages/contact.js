import React from "react"
import "./mystyles.scss"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Obfuscate from "react-obfuscate"
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container contact">
      <h1 className="title">Contact</h1>
      <section>
        <div className="content">
          <p>
            For any inquiries, email me at{" "}
            <Obfuscate email="ernesto@ernestoschnack.com" /> or fill out the
            form below.
          </p>
        </div>
      </section>
      <section className="contact-form">
        <div className="box">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">From</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input
                      class="input"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                    <span class="icon is-small is-left">
                      <FaUser />
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input
                      class="input is-success"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <span class="icon is-small is-left">
                      <FaEnvelope />
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Message</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea class="textarea" name="message"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label"></div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-primary">
                      <FaPaperPlane />
                      &nbsp;Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </Layout>
)

export default Contact

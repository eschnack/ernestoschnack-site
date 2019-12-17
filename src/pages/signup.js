import React from "react"
import "./mystyles.scss"
import SEO from "../components/seo"

import Layout from "../components/layout"

class SignUp extends React.Component {
  componentDidMount() {
    const js = `
        function ml_webform_success_1478328() {
            var $ = ml_jQuery || jQuery;
            $('.ml-subscribe-form-1478328 .row-success').show();
            $('.ml-subscribe-form-1478328 .row-form').hide();
          }
        `

    const script = document.createElement("script")
    const scriptText = document.createTextNode(js)
    script.appendChild(scriptText)
    document.body.appendChild(script)

    const script2 = document.createElement("script")
    script2.src =
      "https://static.mailerlite.com/js/w/webforms.min.js?vd890ed88b3a28c805acc70e1a88fa27c"
    document.body.appendChild(script2)
  }
  render() {
    return (
      <Layout>
        <SEO title="Sign Up" />
        <section className="signupForm">
          <div
            id="mlb2-1478328"
            className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1478328"
          >
            <div className="ml-form-align-center">
              <div className="ml-form-embedWrapper embedForm">
                <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                  <div className="ml-form-embedContent">
                    <h4>Sign up to download the free tabs</h4>
                    <p>
                      Get access to all free tabs, as well updates on new
                      videos, releases and tour dates. 
                    </p>
                  </div>
                  <form
                    className="ml-block-form"
                    action="https://app.mailerlite.com/webforms/submit/x1e7p4"
                    data-code="x1e7p4"
                    method="post"
                    target="_blank"
                  >
                    <div className="ml-form-formContent">
                      <div className="ml-form-fieldRow ">
                        <div className="ml-field-group ml-field-name ml-validate-required">
                          <input
                            type="text"
                            className="form-control"
                            data-inputmask=""
                            name="fields[name]"
                            defaultValue=""
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="ml-form-fieldRow ml-last-item">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input
                            type="email"
                            className="form-control"
                            data-inputmask=""
                            name="fields[email]"
                            defaultValue=""
                            placeholder="Email"
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1" />
                    <div className="ml-form-embedSubmit">
                      <button type="submit" className="primary">
                        Subscribe
                      </button>
                      <button
                        disabled="disabled"
                        style={{ display: "none" }}
                        type="button"
                        className="loading"
                      >
                        <div className="ml-form-embedSubmitLoad">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className="ml-form-successBody row-success"
                  style={{ display: "none" }}
                >
                  <div className="ml-form-successContent">
                    <h4>Thank you!</h4>
                    <p>
                      Check your email (and just in case, your spam folder).
                      Just click on the confirmation link and you'll have access
                      to the tabs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default SignUp

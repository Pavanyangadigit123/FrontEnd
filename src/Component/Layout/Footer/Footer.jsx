import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="custom-footer">
        <footer className="footer-custom text-center text-lg-start  ">
          {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> */}
            {/* <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div> */}

            {/* <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              
            </div> */}
          {/* </section> */}

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>LabourHub
                  </h6>
                  <p>
                    Labour Hub aims to bridge the gap in the existing market by
                    providing a comprehensive platform tailored specifically for
                    labourers such as carpenters, construction workers, and farm
                    workers. It focuses on offering a user-friendly interface
                    for profile creation, job booking, wage negotiation, and
                    feedback collection.
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="/about" className="text-reset">
                      About us
                    </a>
                  </p>
                  <p>
                    <a href="/faq" className="text-reset">
                      FAQ
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Hubli,Vidyanagar
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    labourhub@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i>9956742318
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 0123456789
                  </p>
                  <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              
            </div>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

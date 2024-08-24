import React from "react";


const LabourCard = () => {
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col ">
              <div
                className="card"
                style={{ borderRadius: 15, backgroundColor:"lightgray" }}
              >
                <div className="card-body p-4 text-black">
                  <div>
                    <h6 className="mb-4">chetan</h6>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <p className="fw-bold mb-0">$90</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                        alt="Generic placeholder image"
                        className="img-fluid rounded-circle border border-dark border-3"
                        style={{ width: 70 }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-2">@chetan</p>
                        <ul
                          className="mb-0 list-unstyled d-flex flex-row"
                          style={{ color: "#1B7B2C" }}
                        >
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs" />
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-outline-dark btn-rounded btn-sm"
                          data-mdb-ripple-color="dark"
                        >
                          See profile
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                 
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-success btn-rounded btn-block btn-lg"
                  >
                    <i className="far fa-clock me-2" />
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default LabourCard;

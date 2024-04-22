import React from "react";

export default function AddQuotation() {
  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div
        className="card"
        style={{ backgroundColor: "#d9d9d9", borderRadius: "25px" }}
      >
        <div className="card-body">
          <div className="d-flex flex-row">
            <label className="radio mr-1">
              <div className="text-center ">
                <button
                  className="btn btn-block confirm-button"
                  style={{
                    borderRadius: "10px",
                    margin: "10px",
                    backgroundColor: "#3DDABE",
                  }}
                >
                  <i
                    className="bi bi-envelope"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  Message
                </button>
                {/* <div style={{ margin: "10px 0" }}>  */}
                <button
                  className="btn  btn-block confirm-button"
                  style={{ borderRadius: "10px", backgroundColor: "#3DDABE" }}
                >
                  Call now
                </button>
                <hr />
              </div>
            </label>
          </div>
          <h6
            className="information mt-4"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            Applay quotation
          </h6>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your need"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Time limit"
                />
              </div>
            </div>
            <div className="col-sm-4 d-flex align-items-stretch">
              <button
                className="btn  btn-block d-flex align-items-center justify-content-center"
                style={{
                  height: "45px",
                  margin: "10px",
                  backgroundColor: "#00A8E8",
                }}
              >
                Your Button
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  placeholder="Enter your description"
                  style={{ height: "10%" }}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column text-center px-5 mt-3 mb-3">
            <small className="agree-text">
              By booking this appointment, you agree to the
            </small>
            <a href="#" className="terms">
              Terms & Conditions
            </a>
          </div>

          <div className="text-center">
            <button
              className="btn  btn-block confirm-button"
              style={{ borderRadius: "10px", backgroundColor: "#00A8E8" }}
            >
              Request Quotation
            </button>
            <div style={{ margin: "10px 0" }}></div>
            <button
              className="btn btn-block confirm-button"
              style={{ borderRadius: "10px", backgroundColor: "#00A8E8" }}
            >
              Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

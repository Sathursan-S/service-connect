import React from "react";
import ContactInfo from "../components/Header/button/ContactInfo";
export default function ServiceRate() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 mt-3">
        <div className="first">
          <div className="heading">
            {" "}
            <p className="lead fw-normal mb-1">Electration</p>
          </div>
          <div className="time d-flex flex-row align-items-center justify-content-between mt-3">
            <div className="d-flex align-items-center">
              <i className="fa fa-clock-o clock"></i>
              <span>@Kamal K</span>
            </div>

            <div>
              <span
                className="font-weight-bold"
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Rs 12000
              </span>
            </div>
          </div>
        </div>
        <div className="second d-flex flex-row mt-2">
          <div className="image mr-4">
            <img
              src="https://i.imgur.com/0LKZQYM.jpg"
              className="rounded-circle"
              width="150"
            />
          </div>

          <div className="d-flex flex-column justify-content-center">
            <p style={{ fontFamily: "initial", fontWeight: "bold" }}>
              Electrical and Wiring Repair, Lighting Installation, Switch and
              Outlet Installation, Fan Installation
            </p>
          </div>
        </div>

        <h6 style={{ fontFamily: "initial" }}>
          Kushan B. says, Great work quality, prompt and very professional in
          his work. I will highly recommend Uriel for any work.
        </h6>
        <div className="third mt-4 d-flex justify-content-center"></div>
      </div>
    </div>
  );
}

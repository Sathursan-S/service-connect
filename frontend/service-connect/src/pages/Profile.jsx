import React from "react";
import Quotation from "../components/AddQuotation";
import ServProvDetail from "../components/ServiceRate";
function Profile() {
  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7 ">
            <div className="card">
              <ServProvDetail />
              <h6 className="mb-0">Rate Service Provider</h6>

              <div className="card-body p-4 text-black">
                <div className="mb-5 justify-content-center">
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <div
                      className="p-4 text-black"
                      style={{ backgroundColor: "#f8f9fa", margin: "1% 50%" }}
                    ></div>
                  </div>
                </div>
                <Quotation />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
}

export default Profile;

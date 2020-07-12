import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="container-fluid about">
        <div className="row" id="about">
          <div className="col-sm-6 p-4">
            <div className="abouts">
              <h2>About us</h2>
              <p>
                The GLOBAL SMART ENGINEERING is professional Designing firm
                specializing in Mechanical, HVAC, PLUMBING , FIRE PROTECTION
                designs Commercial, Institutional, Residential Buildings Our
                mission is to use our experience, talent and commitment to
                customer service in order to provide creative, practical and
                cost effective engineering solution to our clients In simple
                terms:
              </p>
              <ul>
                <li>
                  We put our clients first, and we invest in Technology that we
                  created on
                </li>
                <li>
                  Entrepreneurial environment to attract and retain talented
                </li>
                <li>
                  Engineers and designer's We control our growth to ensure that
                </li>
                <li> Quality and professionalism are never compromised</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 p-4 my-auto">
            <img
              src={require("../images/about.jpg")}
              alt="about"
              className="mx-auto d-block img-fluid"
              width="100%"
            />
          </div>
        </div>

        <div className="row approc">
          <div className="col-sm-6 p-4 my-auto">
            <img
              src={require("../images/report.jpg")}
              alt="report"
              className="mx-auto d-block img-fluid"
              width="100%"
            />
          </div>
          <div className="col-sm-6 p-4">
            <div className="abouts approch">
              <h2>Our approach</h2>
              <p>
                The professional staff at Global Smart engineering has been
                completing designs, problem investigation, reports, clients are
                provided with specific and comprehensive services from detailed
                designs The GLOBAL SMART ENGINEERING design philosophy is
                simple: to provide our Clients with a space that is safe,
                comfortable, ecologically sound and fully complementary to the
                interior design. We are proud to have been selected as
                mechanical engineer for project across Canada The GLOBAL SMART
                ENGINEERING takes pride in offering clients engineering
                excellence through creative design attentive service.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

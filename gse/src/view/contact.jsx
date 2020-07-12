import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import ContactUs from "../controller/contactUs";
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid contact" id="contact">
          <div className="container">
            <div className="row pt-4">
              <div className="col-sm-12 text-center p-4">
                <h2 className="text-white p-4">Contact us</h2>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-6 text-center">
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      size="2x"
                      color="#ffffff"
                    />
                    <p className="pt-4 text-white pb-4">
                      Global Smart Eng.
                      <br /> 27 Adler Dr,
                      <br /> Cambridge,
                      <br /> Ontario
                    </p>
                  </div>
                  <div className="col-sm-6 text-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      color="#ffffff"
                    />
                    <p className="pt-4 text-white pb-4">
                      jawdatarif2000@yahoo.com
                    </p>
                  </div>
                  <div className="col-sm-6 text-center">
                    <FontAwesomeIcon icon={faPhone} size="2x" color="#ffffff" />
                    <p className="pt-4 text-white pb-4">
                      Jawdet Arif P.Eng <br />
                      647-893-6832
                    </p>
                  </div>
                  <div className="col-sm-12 p-4">
                    <img
                      src={require("../images/peo.png")}
                      alt="eng"
                      className="mx-auto d-block img-fluid"
                      width="300px"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-4">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner-fluid bg-darks p-4">
          <div className="row">
            <div className="col-sm-6">
              <p className="text-white">
                @ 2020 The GLOBAL SMART ENGINEERING. ALL RIGHTS RESERVED
              </p>
            </div>
            <div className="col-sm-6">
              <p className="text-white text-right">Developed by Akshit Patel</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contact;

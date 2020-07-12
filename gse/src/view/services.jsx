import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faFire,
  faLifeRing,
  faBook,
  faPencilRuler,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
class Service extends Component {
  render() {
    return (
      <div className="container-fluid havc">
        <div className="container mt-4" id="service">
          <div className="row mt-4">
            <div className="col-sm-12 mb-4 mt-4 pt-4">
              <h2 className="text-center mt-4 pt-4">Our Services</h2>
            </div>
            <div className="col-sm-12 mt-4">
              <div className="row">
                <div className="col-sm-4 mb-2">
                  <div className="text-center box">
                    <FontAwesomeIcon icon={faCog} size="7x" color="#0461AF" />
                    <h4 className="mt-4">Mechanical HVAC Design</h4>
                  </div>
                </div>
                <div className="col-sm-4 mb-2">
                  <div className="text-center box">
                    <FontAwesomeIcon icon={faFire} size="7x" color="#0461AF" />
                    <h4 className="mt-4">Fire Protection System</h4>
                  </div>
                </div>

                <div className="col-sm-4 mb-2">
                  <div className="text-center box">
                    <FontAwesomeIcon
                      icon={faLifeRing}
                      size="7x"
                      color="#0461AF"
                    />
                    <h4 className="mt-4">Building Plumbing system</h4>
                  </div>
                </div>

                <div className="col-sm-4 mb-2">
                  <div className="text-center box">
                    <FontAwesomeIcon icon={faBook} size="7x" color="#0461AF" />
                    <h4 className="mt-4">Investigation & Report</h4>
                  </div>
                </div>

                <div className="col-sm-4 mb-2">
                  <div className="text-center box">
                    <FontAwesomeIcon icon={faTint} size="7x" color="#0461AF" />
                    <h4 className="mt-4">Demotic water piping</h4>
                  </div>
                </div>

                <div className="col-sm-4 mb-2">
                  <div className="text-center box">
                    <FontAwesomeIcon
                      icon={faPencilRuler}
                      size="7x"
                      color="#0461AF"
                    />
                    <h4 className="mt-4">
                      Preparation Building Permit drawing
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Service;

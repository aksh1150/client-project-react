import React, { Component } from "react";
import { Link } from "react-scroll";
class Home extends Component {
  render() {
    return (
      <div className="hero-image" id="home">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-lg-6 col-xl-4 imgOverlay">
              <h1>
                Delivering best engineering design for HAVC, Plumbing, and Fire
                Protection for Commercial and Residential Buildings.
              </h1>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="btn btn-gse mt-4"
              >
                Contact now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

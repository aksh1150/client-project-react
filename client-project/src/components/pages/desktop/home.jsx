import React, { Component } from "react";
import DeskTopLayerOne from "./desktopLayerOne";
import DeskOverlay from "./deskOverlay";
import { NavLink } from "react-router-dom";
import ContactUs from "../../form-input/contactUs";
import Aos from "aos";
import "aos/dist/aos.css";

class HomeDesk extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <React.Fragment>
        <DeskTopLayerOne deskhomeLayerOne>
          <div className="row">
            <DeskOverlay homeOverlayClass>
              <p>
                "We are what we think. All that we are arises with our thoughts.
                With our thoughts, we make the world."
              </p>
              <i>- Buddha</i>
            </DeskOverlay>
            <div className="col-md-8 bannerTextDesk">
              <h2>ARE YOU</h2>
              <p className="bannerCaption">
                interested in making lasting changes in your life? <br />
                looking to explore alternative healing modalities? <br />
                curious to learn more about the unique meaning of your life?
              </p>
            </div>
          </div>
        </DeskTopLayerOne>

        <div className="col-md-4 deskHomePro">
          <div className="proDeskBack">
            <img
              src={require("../../../images/desktop/homeProfile.jpg")}
              alt="Profile"
              className="mx-auto d-block img-fluid img-pro-fluid"
            />
            <h2 className="mt-4">ABOUT ME</h2>
            <p>
              "I have trained with The Four Winds, EKAA, and UK Hypnosis
              Academy, amongst others. My personal experiences with
              hypnotherapy, energy healing and other health and healing
              modalities enabled me to see first hand their power to heal. Allow
              me to help you explore other choices for your life."
            </p>
            <p>
              "What you seek is seeking you" <i>- Rumi</i>
            </p>
            <NavLink
              className="btn btn-warning lm-btn mx-auto d-block deskButton"
              to="/aboutme"
              exact
            >
              Learn more about me
            </NavLink>
          </div>
        </div>
        <div className="col-md-8 deskHomeForm">
          <div className="homeFromBack">
            <p>
              "We come to realise that the universe mirrors back to us perfectly
              our beliefs, our intentions, our sincerity. 'What is' is the
              product of the map of reality you carry inside you. If you want to
              change your experience, you need to change the map."
              <i> - Alberto Villoldo</i>
            </p>
            <div className="deskContactForm">
              <h2 className="mt-4 pt-3">CONTACT ME</h2>
              <p
                className="mb-4 pl-2"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                "I am happy to answer any questions you might have. Simply fill
                out the form below":
              </p>
              <ContactUs homebtn />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeDesk;

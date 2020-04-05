import React, { Component } from "react";
import ShadowBox from "../shadowBox";
import LayerOne from "../layerone";
import { NavLink } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <LayerOne homeLayerOne>
          <p>
            "We are what we think.
            <br /> All that we are arises with our thoughts.
            <br />
            With our thoughts, we make the world."
          </p>
          <i>- Buddha</i>
          <ShadowBox homeBoxClass>
            <h2>ARE YOU</h2>
            <p>interested in making lasting changes in your life?</p>
            <p>looking to explore alternative healing modalities?</p>
            <p>curious to learn more about the unique meaning of your life?</p>
          </ShadowBox>
        </LayerOne>
        <div>
          <img
            src={require("../../images/homePerson.png")}
            alt="logo"
            className="mx-auto d-block img-fluid"
          />
        </div>
        <div className="col homeSecondLayer layerOne learn-more">
          <p className="hypnocol mt-4">
            "We come to realise that the universe mirrors back to us perfectly
            our beliefs, our intentions, our sincerity. 'What is' is the product
            of the map of reality you carry inside you. If you want to change
            your experience, you need to change the map."
          </p>
          <i className="hypnocol">- Alberto Villoldo</i>
          <h2 className="mt-4">ABOUT ME</h2>
          <p>
            "My training has included the UK Hypnosis Academy, The Four Winds,
            and EKAA, amongst others. My own experiences with hypnotherapy,
            energy healing and other alternative health and healing modalities
            led me to pursue these alternative therapies and explore their uses
            in my own life expereinces. Allow me to help you explore other
            choices for your life."
          </p>
          <p className="hypnocol mt-4">"What you seek is seeking you"</p>
          <i className="hypnocol">- Rumi</i>
          <br />
          <br />
          <div className="">
            <NavLink
              className="btn btn-warning lm-btn mx-auto d-block"
              to="/aboutme"
              exact
            >
              Learn more about me
            </NavLink>
          </div>
        </div>
        <div className="homeThirdLayer layerOne learn-more">
          <h2 className="mt-2">LET'S TALK</h2>
          <p>
            I would love to hear from you and personally explain to you how your
            session might help with your concerns. Simply fill out the form
            below:
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

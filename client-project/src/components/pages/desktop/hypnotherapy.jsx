import React, { Component } from "react";
import DeskTopLayerOne from "./desktopLayerOne";
import DeskOverlay from "./deskOverlay";
class DeskHypnotherapy extends Component {
  render() {
    return (
      <React.Fragment>
        <DeskTopLayerOne deskhypnoLayerOne>
          <div className="row">
            <DeskOverlay hypnoOverlay>
              <p>
                "One of the biggest gifts you can give the world is a healed
                life."
              </p>
              <i>- Christiane Northrup</i>
            </DeskOverlay>
          </div>
        </DeskTopLayerOne>
        <div className="col-md-12 DeskHypnoLayTwo">
          <div className="row">
            <div className="col-md-4 DeskHelp">
              <h2>HOW CAN HYPNOTHERAPY HELP ME?</h2>
            </div>
            <div className="col-md-8">
              <p>
                Hypnotherapy can help with a myriad of conditions.
                <br /> Some of the more common ones include:
              </p>
              <div className="mt-4 pb-4 hypnoDeskDetails">
                <p>Addictions</p>
                <p>Anger Management</p>
                <p>Anxiety</p>
                <p>Asthma</p>
                <p>Confidence/Motivation/Self-Esteem</p>
                <p>Confusion about Life Purpose</p>
                <p>Depression</p>
                <p>Eating Disorders</p>
                <p>Eczema from stress and anxiety</p>
                <p>Insomnia</p>
                <p>Irritable Bowel Syndrome stress</p>

                <p>Migraines</p>
                <p>Obessive Compulsive Disorder</p>
                <p>Pain Control</p>
                <p>Panic Attacks</p>
                <p>Phobias (fear of flying, spiders, etc.)</p>
                <p>Psoriasis</p>
                <p>Quit Smoking</p>
                <p>Sexual Abuse</p>
                <p>Sports/Work Performance and Enhancement</p>
                <p>Stammering</p>

                <p>Stress/Anxieties</p>
                <p>Weight Loss</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeskHypnotherapy;

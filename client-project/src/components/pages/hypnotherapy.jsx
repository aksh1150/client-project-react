import React, { Component } from "react";
import ShadowBox from "../shadowBox";
import LayerOne from "../layerone";
class Hypnotherapy extends Component {
  render() {
    return (
      <div className="container-fluid">
        <LayerOne hypnoLayerOne>
          <ShadowBox hypnoBox>
            <h2>HOW CAN HYPNOTHERAPY HELP ME?</h2>
            <p className="hypnocol">
              "One of the biggest gifts you can give the world is a healed
              life."
            </p>
            <i className="hypnocol">- Christiane Northrup</i>
            <div className="homeBoxClass p-4 mt-3">
              Hypnotherapy can help with a myriad of conditions. Some of the
              more common ones include:
            </div>
            <div className="mt-3 pb-4">
              <p>Addictions</p>
              <p>Anger Management</p>
              <p>Anxiety</p>
              <p>Asthma</p>
              <p>Confidence/Motivation/Self-Esteem</p>
              <p>Confusion about Life Purpose</p>
              <p>Depression</p>
              <p>Eating Disorders</p>
              <p>Eczema</p>
              <p>Insomnia</p>
              <p>Irritable Bowel Syndrome</p>

              <p>Migraines</p>
              <p>Obessive Compulsive Disorder</p>
              <p>Pain Control</p>
              <p>Panic Attacks</p>
              <p>Phobias (fear of flying, spiders, etc.)</p>
              <p>Psoriasis</p>
              <p>Sports/Work Performance and Enhancement</p>
              <p>Stammering</p>

              <p>Stress</p>
              <p>Weight Release</p>
            </div>
          </ShadowBox>
        </LayerOne>
      </div>
    );
  }
}

export default Hypnotherapy;

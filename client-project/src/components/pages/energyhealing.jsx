import React, { Component } from "react";
import ShadowBox from "../shadowBox";
import LayerOne from "../layerone";
class EnergyHealing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <LayerOne energyLayerOne>
          <ShadowBox energyBox>
            <h2>ENERGY HEALING/ ENERGY MEDICINE &amp; CRYSTAL HEALING</h2>
            <p className="hypnocol mt-4">
              "We have to become still in the midst of the turmoil so we can
              observe clearly how our actions and the actions of others, past
              and present, fit together in the tapestry of life. In the timeless
              instant when we stop moving and simply witness the moment, the
              dust settles and the big picture emerges."
            </p>
            <i className="hypnocol">- Alberto Villoldo</i>
            <p className="mt-4">
              This work is healing on a deep energetic level, a way to connect
              to your Luminous Energy Field(LEF) through shamanic practices. We
              are healing our past and even our future, so we can live in the
              present. Cone with an open mind to experience extraordinary growth
              and healing in a safe and nuturing space.
            </p>
            <p className="pb-4">
              I have completed 300 hours of training with The Four Winds in
              Germany. My teachers: <u>Alberto Villoldo</u>,{" "}
              <u>Marcela Lobos</u>, <u>Stephen Feely</u>, <u>Moritz Reimann</u>,{" "}
              <u>Dirk Zschocke</u>, <u>Isabella Marker</u>,{" "}
              <u>Maria Clara Castaneda</u> and shamans of the{" "}
              <u>Q'ero Tribe of Peru</u>.
            </p>
          </ShadowBox>
          <p className="mt-4 pt-4">
            "Healing is not necessarily about curing. As your inner light grows,
            anything is possible."
          </p>
          <i>- Alberto Villoldo</i>
        </LayerOne>
      </div>
    );
  }
}

export default EnergyHealing;

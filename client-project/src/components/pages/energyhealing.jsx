import React, { Component } from "react";
import ShadowBox from "../shadowBox";
import LayerOne from "../layerone";
import Aos from "aos";
import "aos/dist/aos.css";
class EnergyHealing extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <div className="container-fluid">
        <LayerOne energyLayerOne>
          <ShadowBox energyBox>
            <h2>ENERGY HEALING/ENERGY MEDICINE &amp; CRYSTAL HEALING</h2>
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
              to your Luminous Energy Field through shamanic practices. We are
              healing our past and even our future, so we can live in the
              present. Come with an open mind to experience extraordinary growth
              and healing in a safe and nurturing space.
            </p>
            <p>
              This work can also assist with the same issues as hypnotherapy,
              but we would be approaching your situation differently. I often
              work with clients using both hypnotherapy and energy healing, as
              they have a synergistic benefit.
            </p>
            <p className="pb-4">
              I have trained with{" "}
              <u>
                <a
                  href="https://thefourwinds.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Four Winds
                </a>
              </u>
              . My teachers:{" "}
              <u>
                <a
                  href="//albertovilloldophd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alberto Villoldo
                </a>
              </u>
              ,{" "}
              <u>
                <a
                  href="https://www.marcelalobos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marcela Lobos
                </a>
              </u>
              ,{" "}
              <u>
                <a
                  href="https://www.purerevitalizingenergy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stephen Feely
                </a>
              </u>
              , Moritz Reimann, Dirk Zschocke,{" "}
              <u>
                <a
                  href="https://www.isabella-marker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Isabella Marker
                </a>
              </u>
              ,{" "}
              <u>
                <a
                  href="https://www.mariaclaracastaneda.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maria Clara Castaneda
                </a>
              </u>{" "}
              and shamans of the{" "}
              <u>
                <a
                  href="https://shamaniceducation.org/qero-ancient-andean-tribe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Q'ero Tribe of Peru
                </a>
              </u>
              .
            </p>
          </ShadowBox>
          <p className="mt-4 pt-4">
            "Healing is not necessarily about curing. As your inner light grows,
            anything is possible."
          </p>
          <i>- Alberto Villoldo</i>
        </LayerOne>
        <div className="col">
          <div className="energySecondaryLayer">
            <div className="cha mt-4">
              <h3 className="text-center mt-4">CHAKRAS</h3>
              <div className="chak">
                <span
                  className="chakras tspink"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Crown
                </span>
                <p>I am, you are, we are</p>
              </div>
              <div className="chak pt-3">
                <span
                  className="chakras tspurple"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Third Eye
                </span>
                <p>My inner wisdom guides me</p>
              </div>
              <div className="chak pt-2">
                <span
                  className="chakras tsblue"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Throat
                </span>
                <p>
                  I express myself appropriately and willingly listen to others
                </p>
              </div>
              <div className="chak pt-4">
                <span
                  className="chakras tsgreen"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Heart
                </span>
                <p>I love and accept myself and others</p>
              </div>
              <div className="chak pt-4">
                <span
                  className="chakras tsyellow"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Solar Plexus
                </span>
                <p>I take charge of my life</p>
              </div>
              <div className="chak pt-4 mt-3">
                <span
                  className="chakras tsorange"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Sacral
                </span>
                <p>I enjoy my life</p>
              </div>
              <div className="chak pt-2">
                <span
                  className="chakras tsred"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Root
                </span>
                <p>I willingly participate in my physical life on earth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EnergyHealing;

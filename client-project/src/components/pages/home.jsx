import React, { Component } from "react";
import ShadowBox from "../shadowBox";
import LayerOne from "../layerone";
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
      </div>
    );
  }
}

export default Home;

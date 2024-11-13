import React, { Component } from "react";
import ShadowBox from "../shadowBox";
import LayerOne from "../layerone";
import { NavLink } from "react-router-dom";
import ContactUs from "../form-input/contactUs";
import Aos from "aos";
import { FaQuoteLeft } from "react-icons/fa";
import Testimonials from "../../data/testimonials.json";
import "aos/dist/aos.css";
import Carousel from "../testimonial/Carousel";
class Home extends Component {
  componentDidMount() {
    Aos.init();
  }
  bgColors = ["#FFC007", "#A0D3D8", "#D899C6"];
  render() {
    return (
      <div className="container-fluid">
        <LayerOne homeLayerOne>
          <p>
            "We are what we think. All that we are arises with our thoughts.
            With our thoughts, we make the world."
          </p>
          <i>- Buddha</i>
          <ShadowBox homeBoxClass data-aos="fade-up" data-aos-duration="3000">
            <h2>ARE YOU</h2>
            <p>interested in making lasting changes in your life?</p>
            <p>looking to explore alternative healing modalities?</p>
            <p>curious to learn more about the unique meaning of your life?</p>
          </ShadowBox>
        </LayerOne>
        <div className="col-md-12">
          <Carousel show={1} infiniteLoop={false}>
            {Testimonials.map((testimonial, index) => {
              return (
                <div className="flex-container" key={testimonial.id}>
                  <div
                    className="testimontial"
                    style={{
                      backgroundColor:
                        this.bgColors[index % this.bgColors.length],
                    }}
                  >
                    <div className="testimonialbox1">
                      <p className="quoteIcon">
                        <FaQuoteLeft
                          size="1.5em"
                          color={this.bgColors[index % this.bgColors.length]}
                        />
                      </p>
                      {testimonial.testimonial.map((text) => (
                        <p>{text}</p>
                      ))}
                      <p>
                        Yours sincerely, <br /> {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        {/* <div className="col homeImg">
          <img
            src={require("../../images/homePro.jpg")}
            alt="logo"
            className="mx-auto d-block img-fluid"
            width="100%"
          />
        </div> */}
        <div className="col homeSecondLayer layerOne learn-more">
          <p
            className="hypnocol mt-4"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            "We come to realise that the universe mirrors back to us perfectly
            our beliefs, our intentions, our sincerity. 'What is' is the product
            of the map of reality you carry inside you. If you want to change
            your experience, you need to change the map."
          </p>
          <i className="hypnocol">- Alberto Villoldo</i>
          <h2 className="mt-4">ABOUT ME</h2>
          <p data-aos="fade-right" data-aos-duration="3000">
            The most profound guidance comes from within ourselves. Allow me to
            help you find your inner voice, so you can better navigate the outer
            world.
          </p>
          {/* <p className="hypnocol mt-4">"What you seek is seeking you"</p>
          <i className="hypnocol">- Rumi</i> */}
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
          <div className="col-md-12 mt-5 pb-5 d-flex justify-content-center align-items-center">
            <img
              src={require("../../images/MysticMag.png")}
              alt="Logo"
              className="img-fluid"
              style={{
                width: "101px",
                marginTop: "20px",
                marginRight: "12px",
              }}
            />
            <img
              src={require("../../images/3.png")}
              alt="Logo"
              className="img-fluid"
              style={{ width: "220px", marginTop: "20px" }}
            />
          </div>
        </div>
        <div className="homeThirdLayer layerOne learn-more">
          <h2 className="mt-2">CONTACT ME</h2>
          <p className="mb-4" data-aos="fade-up" data-aos-duration="3000">
            "I am happy to answer any questions you might have. Simply fill out
            the form below":
          </p>
          <ContactUs homebtn />
        </div>
      </div>
    );
  }
}

export default Home;

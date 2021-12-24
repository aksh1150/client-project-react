import React, { Component } from "react";
import DeskTopLayerOne from "./desktopLayerOne";
import DeskOverlay from "./deskOverlay";
import { NavLink } from "react-router-dom";
import ContactUs from "../../form-input/contactUs";
import Aos from "aos";
import { FaQuoteLeft } from "react-icons/fa";
import Testimonials from "../../../data/testimonials.json";
import "aos/dist/aos.css";
import Carousel from "../../testimonial/Carousel"

class HomeDesk extends Component {

  componentDidMount() {
    Aos.init();
  }

  bgColors = ["255, 192, 7", "160, 211, 216", "216, 153, 198"];

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

         <div className="col-md-12">
            <Carousel show={3}>
                {Testimonials.map((testimonial, index) => {
                  return (
                    <div className="flex-container" key={testimonial.id}>
                      <div className="testimontial" style={{background: `rgb(${this.bgColors[index % this.bgColors.length]})`}}>
                      <div className="testimonialbox1">
                        <p className="quoteIcon">
                          <FaQuoteLeft size='1.5em' color={`rgb(${this.bgColors[index % this.bgColors.length]})`} />
                        </p>
                        {testimonial.testimonial.map(text => <p>{text}</p>)}
                        <p>Yours sincerely, <br /> {testimonial.author}</p>
                      </div>
                    </div>
                    </div>
                  )
                })}
            </Carousel>
          </div>



        <div className="col-md-4 deskHomePro">
          <div className="proDeskBack">
            {/* <img
              src={require("../../../images/desktop/homeProfile.jpg")}
              alt="Profile"
              className="mx-auto d-block img-fluid img-pro-fluid"
            /> */}
            <h2 className="mt-4">ABOUT ME</h2>
            <p>
              The most profound guidance comes from within ourselves. Allow me to help you find your inner voice, so you can better navigate the outer world.
            </p>
            {/* <p>
              "What you seek is seeking you" <i>- Rumi</i>
            </p> */}
            <NavLink
              className="btn btn-warning lm-btn mx-auto d-block deskButton"
              to="/aboutme"
              exact
            >
              Learn more about me
            </NavLink>
             <div className="col-md-12 mt-5">
              <img
                  src={require("../../../images/3.png")}
                  alt="Logo"
                  className="mx-auto d-block img-fluid"
                  style={{ width: '220px', marginTop: '20px' }}
                />
            </div>
           
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

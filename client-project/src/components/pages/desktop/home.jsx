import React, { Component } from "react";
import DeskTopLayerOne from "./desktopLayerOne";
import DeskOverlay from "./deskOverlay";
import { NavLink } from "react-router-dom";
import ContactUs from "../../form-input/contactUs";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "../../testimonial/Carousel"

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

         <div className="col-md-12">
            <Carousel show={3}>
                 
                    <div className="flex-container">
                     <p className="testimonialbox1 testimontial" >Recently I was fortunate enough to have some healing sessions with Nicky to help me with my phobia of the dentist. I had to have 2 teeth extracted but since childhood I have had a deep-seated fear/terror of the dentist and Nicky offered to work with me in the week leading up to my appointment to help me to overcome these fears.

                       We had 2 healing sessions which involved hypnotherapy and EFT tapping. The sessions were amazing and after the first session of EFT with Nicky, which was very emotional due to some very bad dental experiences as a child, I felt much calmer and positive about my upcoming dental treatment. After the second session, which mainly involved hypnotherapy, I felt even more relaxed about my visit to the dentist. I was able to sleep well the night before my appointment and I was even able to eat breakfast on the morning of my extractions.

                       I am very grateful that I had the opportunity for Nicky to share her gift of healing with me. I believe that she has a natural talent for healing and she is very intuitive.

                       I highly recommend Nicky and I hope that she has the opportunity to share her gift of healing with anyone who is in need of healing in any way.

                       Yours sincerely,
                       Veronica
                     </p>
                     </div>
              
                    <div>
                    <p className="testimonialbox2 testimontial" > Recently I was fortunate enough to have some healing sessions with Nicky to help me with my phobia of the dentist. I had to have 2 teeth extracted but since childhood I have had a deep-seated fear/terror of the dentist and Nicky offered to work with me in the week leading up to my appointment to help me to overcome these fears.

                       We had 2 healing sessions which involved hypnotherapy and EFT tapping. The sessions were amazing and after the first session of EFT with Nicky, which was very emotional due to some very bad dental experiences as a child, I felt much calmer and positive about my upcoming dental treatment. After the second session, which mainly involved hypnotherapy, I felt even more relaxed about my visit to the dentist. I was able to sleep well the night before my appointment and I was even able to eat breakfast on the morning of my extractions.

                       I am very grateful that I had the opportunity for Nicky to share her gift of healing with me. I believe that she has a natural talent for healing and she is very intuitive.

                       I highly recommend Nicky and I hope that she has the opportunity to share her gift of healing with anyone who is in need of healing in any way.

                       Yours sincerely,
                       Veronica</p>
                      </div>
                     

                     <div>
                     <p className="testimonialbox3 testimontial" >Recently I was fortunate enough to have some healing sessions with Nicky to help me with my phobia of the dentist. I had to have 2 teeth extracted but since childhood I have had a deep-seated fear/terror of the dentist and Nicky offered to work with me in the week leading up to my appointment to help me to overcome these fears.

                       We had 2 healing sessions which involved hypnotherapy and EFT tapping. The sessions were amazing and after the first session of EFT with Nicky, which was very emotional due to some very bad dental experiences as a child, I felt much calmer and positive about my upcoming dental treatment. After the second session, which mainly involved hypnotherapy, I felt even more relaxed about my visit to the dentist. I was able to sleep well the night before my appointment and I was even able to eat breakfast on the morning of my extractions.

                       I am very grateful that I had the opportunity for Nicky to share her gift of healing with me. I believe that she has a natural talent for healing and she is very intuitive.

                       I highly recommend Nicky and I hope that she has the opportunity to share her gift of healing with anyone who is in need of healing in any way.

                       Yours sincerely,
                       Veronica 
                       </p>
                     
                  </div>
                 
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
        <div className="col-md-12">
          <img
              src={require("../../../images/imdha_logo.png")}
              alt="Logo"
              className="mx-auto d-block img-fluid"
              style={{ width: '80px', marginTop: '20px' }}
            />
        </div>
      </React.Fragment>
    );
  }
}

export default HomeDesk;

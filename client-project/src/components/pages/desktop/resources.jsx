import React, { Component } from "react";
import BOOKS_DATA from "../../../data/books";
import Aos from "aos";
import "aos/dist/aos.css";
class DeskResources extends Component {
  state = {
    getBooks: BOOKS_DATA,
  };
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-12 DeskResourceBack">
          <div className="row DeskRespurces">
            <div className="col-md-3">
              {" "}
              <h2>RESOURCES</h2>
            </div>
            <div className="col-md-9">
              <p className="hypnocol mt-2">
                "If you believe firmly that your consciousness is locked up
                somewhere inside your skull and is powerless to escape it, if
                you feel that your consciousness ends at the boundary of your
                body, then you sell yourself short, and you will think that I am
                a delusion. I am no more a delusion than you are."{" "}
                <i className="hypnocol">- Seth</i>
              </p>
            </div>
          </div>
        </div>
        <div className="row DeskbookList">
          <div className="col-lg-4 websites mt-4">
            <h4>
              Recommended Websites
              <p className="pt-4">
                <a
                  href="https://acim.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A Course in Miracles
                </a>
              </p>
              <p>
                <a
                  href="https://ascendedhealth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ascended Health
                </a>
              </p>
              <p>
                <a
                  href="https://www.biomat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biomat
                </a>
              </p>
              <p>
                <a
                  href="https://www.myss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Caroline Myss
                </a>
              </p>
              <p>
                <a
                  href="https://www.drnorthrup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christiane Northrup
                </a>
              </p>
              <p>
                <a
                  href="https://deborahking.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deborah King Center
                </a>
              </p>
              <p>
                <a
                  href="https://globalhealing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Global Healing Center
                </a>
              </p>
              <p>
                <a
                  href="https://www.hayhouseradio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hay House Radio
                </a>
              </p>
              <p>
                <a
                  href="https://www.heartmath.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HeartMath Institute
                </a>
              </p>
              <p>
                <a
                  href="https://drjoedispenza.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Joe Dispenza
                </a>
              </p>
              <p>
                <a
                  href="https://mindfulme.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mindful Me
                </a>
              </p>
              <p>
                <a
                  href="https://www.dhamma.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vipassana Mediation Courses
                </a>
              </p>
            </h4>
          </div>

          <div className="col-lg-8 mt-4 pt-4">
            <div className="row">
              <div className="col-lg-12 DeskBookTitle">
                <h4 className="mt-4">Books</h4>
              </div>
              {this.state.getBooks.map((book) => (
                <div
                  key={book.id}
                  className="col mt-3 lastch"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={require(`../../../images/books/${book.id}.jpg`)}
                    alt="logo"
                    className="mx-auto d-block bookImg"
                  />
                  <h6 className="text-center mt-2">
                    <i>{book.title}</i>
                  </h6>

                  <p className="text-center DeskAuthor">{book.author}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-12 Deskvideos mt-4">
            <h4 className="pl-3">Videos</h4>
            <div className="row">
              <div
                className="col-lg-4 mt-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <iframe
                  src="https://www.youtube.com/embed/mTB0wYZTXxw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="v1"
                ></iframe>
                <p className="mt-4">
                  ALL 9 SOLFEGGIO FREQUENCIES HEALING MUSIC | Whole Body
                  Regeneration | 9 MIRACLE TONES
                </p>
              </div>
              <div
                className="col-lg-4 mt-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <iframe
                  src="https://www.youtube.com/embed/5mikwYABpME"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="v2"
                ></iframe>
                <p className="mt-4">
                  Guided Reiki Self Treatment Timer - Bell Alarm Every 3 minutes
                  with 26 Hard Placements Animation
                </p>
              </div>
              <div
                className="col-lg-4 mt-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <iframe
                  src="https://www.youtube.com/embed/wzjWIxXBs_s"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="v3"
                ></iframe>
                <p className="mt-4">
                  CELESTIAL WHITE NOISE | Sleep Better, Reduce Stress, Calm Your
                  Mind, Improve Focus | 10 hour Ambient
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeskResources;

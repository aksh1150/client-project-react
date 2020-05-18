import React, { Component } from "react";
import LayerOne from "../layerone";
import BOOKS_DATA from "../../data/books";
import Aos from "aos";
import "aos/dist/aos.css";
class Resources extends Component {
  state = {
    getBooks: BOOKS_DATA,
  };
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <div className="container-fluid">
        <LayerOne resourceLayerOne>
          <h2>RESOURCES</h2>
          <p className="hypnocol mt-2">
            "If you believe firmly that your consciousness is locked up
            somewhere inside your skull and is powerless to escape it, if you
            feel that your consciousness ends at the boundary of your body, then
            you sell yourself short, and you will think that I am a delusion. I
            am no more a delusion than you are."
          </p>
          <i className="hypnocol">- Seth</i>
        </LayerOne>
        <div className="row justify-content-md-center bookList">
          <div className="col-12">
            <h4>Books</h4>
            <p className="pr-4 pl-4">
              can be ordered through{" "}
              <u>
                <a
                  href="https://magrudy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  magrudy.com
                </a>
              </u>{" "}
              bookstore in Dubai
            </p>
          </div>
          {this.state.getBooks.map((book) => (
            <div
              key={book.id}
              className="col mt-3 lastch"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={require(`../../images/books/${book.id}.jpg`)}
                alt="logo"
                className="mx-auto d-block bookImg"
              />
              <p className="p-2">
                <i>{book.title}</i> {book.author}
              </p>
            </div>
          ))}
          <div className="col-12">
            <p>
              Notable authors:
              <br />
              All books by Dolores Cannon
              <br />
              All books by Brain Weiss
              <br />A New Earth by Eckhart Tolle
            </p>
          </div>
          <div className="col-12 websites mt-4">
            <h4>
              Websites
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
                  href="https://deborahking.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deborah King Center
                </a>
              </p>
              <p>
                <a
                  href="https://www.drnorthrup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr Christiane Northrup
                </a>
              </p>
              <p>
                <a
                  href="https://drjoedispenza.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr Joe Dispenza
                </a>
              </p>
              <p>
                <a
                  href="//ntiawellbeing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Essentia Well Being Center
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
                  href="https://illuminations.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Illuminations Well Being Center
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
          <div className="col-12 videos mt-4 pt-4">
            <h4>Videos</h4>
            <div
              className="col mt-4"
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
              <p>
                ALL 9 SOLFEGGIO FREQUENCIES HEALING MUSIC | Whole Body
                Regeneration | 9 MIRACLE TONES
              </p>
            </div>
            <div
              className="col mt-4"
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
              <p>
                Guided Reiki Self Treatment Timer - Bell Alarm Every 3 minutes
                with 26 Hard Placements Animation
              </p>
            </div>
            <div
              className="col mt-4"
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
              <p>
                CELESTIAL WHITE NOISE | Sleep Better, Reduce Stress, Calm Your
                Mind, Improve Focus | 10 hour Ambient
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;

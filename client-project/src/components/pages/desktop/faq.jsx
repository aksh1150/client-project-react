import React, { Component } from "react";
class DeskFaq extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12 DeskFaqHead">
          <div className="row">
            <div className="col-md-2">
              <h2>FAQ</h2>
            </div>
            <div className="col-md-10 DeskFaqQA">
              <h5>WHAT IS HYPNOSIS?</h5>
              <p>
                "It is not easy to find happiness in ourselves, and it is not
                possible to find it elsewhere"<i> - Agnes Repplier</i>
              </p>
              <p className="faqtxtcol">
                The term "hypnosis" comes from the acient Greek word "hypnos",
                meaning "sleep". Hypnosis is a natural state of deep relaxation
                and increased awareness. We all naturally enter this state at
                least twice every day: just before we go to sleep and just
                before we wake up. Other examples of this state are when you are
                travelling a familiar route - driving, walking or public
                transport - and you find yourself at your destination without
                remembering entirely how you got there. Again, you have entered
                the hypnotic state easily and naturally.
              </p>
              <p className="faqtxtcol mb-4 pb-3">
                Hypnotherapy is a way of bypassing the conscious, critical,
                thinking mind to speak directly to the subconscious mind.
                Hypnosis involves focused attention, reduced peripheral
                awareness, and an enhanced capacity to respond to suggestion.
                Hypnosis can also be described as an altered state of mind or a
                trance-like state, marked by a level of awareness different from
                our ordinary state of consciousness. Using carefully developed
                scripts, hypnotherapy allows for changes to our emotional,
                behavioural, attitudinal and spiritual selves to take place.
              </p>
              <hr />
              <div className="layerOnes faqtxtcol">
                <label className="pr-4 pl-4">
                  Some short videos for your further information:
                </label>
                <div className="row">
                  <div className="col-md-6 sp">
                    <p className="faqLink pt-2 p-4">
                      <a
                        href="https://www.youtube.com/watch?v=ZXavV72msZY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="faqtxtcol"
                      >
                        What is hypnotherapy and how does hypnotherapy work?
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 sp">
                    <p className="faqLink pt-2 p-4">
                      <a
                        href="https://www.youtube.com/watch?v=Uvf8b2Oyad8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="faqtxtcol"
                      >
                        What is Hypnosis? Conscious Mind vs Sub-conscious Mind
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="DeskFAQLAYERCOlor mb-4">
                <h5>CAN I BE HYPNOTISED AGAINST MY WILL?</h5>
                <p className="hypnocol">
                  "Between thinking and seeing, there is a place called
                  knowing." <i className="hypnocol">- Caroline Myss</i>
                </p>

                <p className="faqtxtcol pt-4">
                  Hypnosis is a safe, effective and scientifically accepted
                  procedure that is being practiced all over the world right
                  now. One of the myths around hypnosis is that it is a form of
                  mind control and that the client can be coerced into doing
                  things they normally would not do and would not wish to do.
                  This is not possible, because hypnosis requires your
                  participation and consent for it to work. It is important to
                  remember that you are in control at all times. You cannot do
                  anything that you feel is against your core values and your
                  will.
                </p>
              </div>
              <div className="DeskFAQLAYERCOlor mt-4">
                <h5>WHAT TO EXPECT DURING A SESSION?</h5>
                <p className="hypnocol">
                  "Almost everything will work again if you unplug it for a few
                  minutes, including you."
                  <i className="hypnocol">- Anne Lamott</i>
                </p>

                <p className="faqtxtcol pt-4">
                  In your first session, you will complete a questionnaire, then
                  we will take some time to discuss and identify the issue,
                  followed by a short discussion of what hypnotherapy is about
                  and what it can achieve. After that, I will do a short
                  hypnosis on you so you can experience it for yourself.
                  Afterwards, we will reflect on the experience together and
                  decide on the next steps in your healing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeskFaq;

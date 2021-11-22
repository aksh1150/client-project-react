import React, { Component } from "react";
import LayerOne from "../layerone";
import ContactUs from "../form-input/contactUs";
class AboutMe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <LayerOne aboutLayerOne>
          <h2>ABOUT ME</h2>
          <p className="hypnocol">
            "Life will give you whatever experience is most helpful for the
            evolution of your consciousness."
          </p>
          <i className="hypnocol">- Eckhart Tolle</i>
        </LayerOne>
        <div className="layerOnes">
          <p className="abotTxtCol mt-2">
            Hi, and thanks for visiting my website. I am from Australia, but I
            have spent most of my adult life living in other countries. Dubai
            has been my home since 2011.
          </p>
          <p className="abotTxtCol">
            I have always been a sensitive and intuitive soul, but for most of
            my life, I explored other aspects of myself. I was a court reporter
            for over 25 years. This gave me the opportunity to live in various
            countries and explore many other cultures, all of which I am
            grateful for. But for many years, I had a sense that life wanted to
            take me elsewhere and wanted me to explore other aspects of my
            being.
          </p>
          <p className="abotTxtCol">
            So I began my journey in my mid-40s to see what else life had to
            offer me. It wasn't until I had a profound awakening and healing
            experience through hypnosis that I finally felt able to begin the
            journey of making significant changes in my life and set out on the
            path of becoming a hypnotherapist and energy healer. This new way of
            life has brought about many uplifting changes in my thinking and
            life experience.
          </p>
          <p className="abotTxtCol">
            I welcome the opportunity to work with a variety of people and
            assist them on their healing journey. My experience was one of "I'm
            not sure why I feel like this and how to change my thinking
            patterns, but I know I need some guidance and assistance to help me
            on my journey."
          </p>
          <p className="abotTxtCol">
            The most profound guidance comes from within ourselves. Allow me to
            help you find your inner voice, so you can better navigate the outer
            world. The techniques I have learnt are about helping you to feel
            empowered, so you can recognise and listen to your intuition.
          </p>
          <p className="abotTxtCol">
            If you are looking to make profound changes, I know this experience
            intimately. I welcome the opportunity to work alongside you to
            explore new possibilities of a meaningful life.
          </p>
        </div>
        <div className="aboutContact">
          <div className="blackglass">
            <p className="mt-3">I am a Clinical Integrated Hypnotherapist and have studied hypnotherapy with organizations in the UK, USA, Australia, and the UAE.</p>
            <p className="mt-3">I am also a qualified Shamanic Energy Healer, as well as a Reiki practitioner.</p>
            <p className="mt-3">Additionally, I have undertaken studies in Cognitive Behaviour Therapy (CBT), Emotional Freedom Technique (EFT), and Simpson Protocol.</p>
          </div>
          <p className="hypnocol aboutForm p-4">
            "I am happy to answer any questions you might have. Simply fill out
            the form below":
          </p>
          <ContactUs aboutbtn />
        </div>
      </div>
    );
  }
}

export default AboutMe;

import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import { Reveal } from "../../constants/Reveal";
import { ParallaxText } from "../../App";

const AboutUs = () => (
  <>
  <div
  className="app__aboutus app__bg flex__center section__padding"
  id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>


    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <Reveal cover={false}>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        </Reveal>
        <Reveal cover={false}>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
            adipiscing ultrices vulputate posuere tristique. In sed odio nec
            aliquet eu proin mauris et.
          </p>
        </Reveal>
        <Reveal cover={false}>
          <button type="button" className="custom__button">
            Know More
          </button>
        </Reveal>
      </div>
      <Reveal cover={false}>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>
      </Reveal >
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <Reveal cover={false}>
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
        </Reveal>
        <Reveal cover={false}>
          <button type="button" className="custom__button">
            Know More
          </button>
        </Reveal>
      </div>
    </div>
  </div>
  <section>
      <ParallaxText baseVelocity={-2}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={2}>Scroll velocity</ParallaxText>
  </section>
    </>
);

export default AboutUs;

import React from "react";
import { Reveal } from "../../constants/Reveal";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import { Parallax } from "react-scroll-parallax";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <Reveal cover={true}>
        <h1 className="headtext__cormorant">Our Laurels</h1>
      </Reveal>  

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <Reveal cover={true}>
      <Parallax speed={-30}>
        <img src={images.laurels} alt="laurels_img" />

      </Parallax>
      </Reveal>  
    </div>
  </div>
);

export default Laurels;

import React from "react";
import { Reveal } from "../../constants/Reveal";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";
import { Parallax  } from 'react-scroll-parallax';


const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <Reveal cover={true}>
    <Parallax speed={-30}>
        <img src={images.chef} alt="chef_image" />
    </Parallax>
      </Reveal>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <Reveal cover={true}>
        <h1 className="headtext__cormorant">What we believe in</h1>
      </Reveal>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
        <Parallax speed={7}>
          <img src={images.quote} alt="quote_image" />
        </Parallax>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </p>
      </div>
      <div className="app__chef-sign">
        <Reveal cover={true}>
          <p>Kevin Luo</p>
        </Reveal>  
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;

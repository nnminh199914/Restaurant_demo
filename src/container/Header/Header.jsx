import React from "react";
import { Reveal } from "../../constants/Reveal";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { motion } from "framer-motion";
import "./Header.css";
import { Parallax  } from 'react-scroll-parallax';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <Reveal cover={true}>
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
      </Reveal>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.75,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Parallax speed={-30}>
          <img src={images.welcome} alt="header_img" />
        </Parallax>

      </motion.div>
    </div>
  </div>
);

export default Header;

import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.css";
import { useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";


const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const ref = useRef(null);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const isInView = useInView(ref);


  useEffect(() => {
    console.log(isInView)
    if(isInView){
      vidRef.current.play();
    }else{
      vidRef.current.pause();
    }
  },[isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
      </div>
    </div>
  );
};

export default Intro;

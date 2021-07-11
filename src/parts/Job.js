import React from "react";

import CardSkill from "./CardSkill";

import WEB from "../assets/images/web.png";
import MOBILE from "../assets/images/mobile.png";

import Fade from "react-reveal/Fade";

const Degree = () => {
  return (
    <section className="container job">
      <Fade bottom>
        <h4 className="job-title mb-5 mb-md-0">
          Yang saya<span style={{ color: "#152C5B" }}> Kerjakan</span>
        </h4>
      </Fade>
      <div className="row d-flex justify-content-center align-items-center">
        <Fade bottom delay={300}>
          <CardSkill poto={WEB} name="Web Development"></CardSkill>
        </Fade>
        <Fade bottom delay={600}>
          <CardSkill poto={MOBILE} name="Mobile Development"></CardSkill>
        </Fade>
      </div>
    </section>
  );
};

export default Degree;

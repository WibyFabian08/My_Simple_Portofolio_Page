import React from "react";

import CardSkill from "./CardSkill";

import WEB from '../assets/images/web.png'
import MOBILE from '../assets/images/mobile.png'

const Degree = () => {
  return (
    <section className="container job">
      <h4 className="job-title mb-5 mb-md-0">
        Yang saya<span style={{ color: "#152C5B" }}> Kerjakan</span>
      </h4>
      <div className="row d-flex justify-content-center align-items-center">
      <CardSkill poto={WEB} name="Web Development"></CardSkill>
      <CardSkill poto={MOBILE} name="Mobile Development"></CardSkill>
      </div>
    </section>
  );
};

export default Degree;

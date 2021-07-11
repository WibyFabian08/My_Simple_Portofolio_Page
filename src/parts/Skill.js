import React from "react";
import CardSkill from "./CardSkill";

import SQL from "../assets/images/sql.png";
import CSS from "../assets/images/css.png";
import Bootstrap from "../assets/images/bootstrap.png";
import ReactJs from "../assets/images/react.png";
import Laravel from "../assets/images/laravel1.png";
import HTML from "../assets/images/html.png";
import JS from "../assets/images/js.png";

import Fade from "react-reveal/Fade";

const Skill = () => {
  return (
    <section className="skill container">
      <Fade bottom>
        <h4 className="skill-title mb-5 mb-md-0">
          Keahlian<span style={{ color: "#152C5B" }}> Saya</span>
        </h4>
      </Fade>
      <div className="row d-flex flex-wrap justify-content-center align-items-center">
        <Fade bottom delay={300}>
          <CardSkill poto={JS} name="JavaScript 80%"></CardSkill>
        </Fade>
        <Fade bottom delay={600}>
          <CardSkill poto={HTML} name="HTML 90%"></CardSkill>
        </Fade>
        <Fade bottom delay={900}>
          <CardSkill poto={CSS} name="CSS 80%"></CardSkill>
        </Fade>
        <Fade bottom delay={1200}>
          <CardSkill poto={ReactJs} name="React Js 80%"></CardSkill>
        </Fade>
        <Fade bottom delay={1500}>
          <CardSkill poto={Laravel} name="Laravel 80%"></CardSkill>
        </Fade>
        <Fade bottom delay={1800}>
          <CardSkill poto={Bootstrap} name="Bootstrap 80%"></CardSkill>
        </Fade>
        <Fade bottom delay={2100}>
          <CardSkill poto={SQL} name="SQL 80%"></CardSkill>
        </Fade>
      </div>
    </section>
  );
};

export default Skill;

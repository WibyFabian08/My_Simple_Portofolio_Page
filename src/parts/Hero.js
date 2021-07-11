import React from "react";

import ME from "../assets/images/poto.jpg";

import Fade from "react-reveal/Fade";

const Hero = () => {
  function showMySkill() {
    window.scrollTo({
      top: 0 + 600,
      behavior: "smooth",
    });
  }
  return (
    <section className="hero container">
      <div className="row d-flex align-items-center">
        <Fade bottom>
          <div className="col-12 col-md-6 bagian-kiri">
            <div className="content-wrapper w-100 position-relative">
              <div className="image-border w-75 position-absolute"></div>
              <img src={ME} className="w-75 position-absolute" alt="" />
            </div>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className="col-12 col-md-6 bagian-kanan">
            <h1>
              Halo... <br /> Saya Wiby Fabian <br/> Rianto
            </h1>
            <p className="text-muted">
              Saya seorang mahasiswa Jurusan Teknik Informatika, <br />
              Saya tertarik untuk memperdalam Frontend <br />
              Tools yang saya gunakan adalah React Js dan Bootstrap
            </p>
            <button className="btn" onClick={showMySkill}>Show More</button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;

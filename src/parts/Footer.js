import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import Arrow from "../assets/images/arrow-top.png";

const Footer = () => {
  const refFooter = useRef(null);

  function toTheTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Fade bottom>
        <footer ref={refFooter} className="footer position-relative">
          <div className="container">
            <div className="row mt-5">
              <Fade bottom delay={500}>
                <div className="col-6 col-md-5 text-left">
                  <h4 className="footer-logo">
                    Wiby Fabian Rianto
                  </h4>
                  <p className="text-muted">
                    Teruslah Belajar dengan ikhlas dan sungguh-sungguh <br />
                    Semakin banyak belajar semakin bermakna hidup ini.
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={1000}>
                <div className="col-6 col-md-2 d-flex flex-column">
                  <h6 className="mb-4 title">Alamat</h6>
                  <p className="text-muted mb-2" href="/">
                    Kp. Simpang
                  </p>
                  <p className="text-muted mb-2" href="/">
                    Kec. Cisurupan
                  </p>
                  <p className="text-muted mb-2" href="/">
                    Kab. Garut
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={1500}>
                <div className="col-6 col-md-2 d-flex flex-column">
                  <h6 className="mb-4 title mt-5 mt-md-0">Moto Hidup</h6>
                  <p className="text-muted mb-2" href="/">
                    Pelajari dan Amati
                  </p>
                  <p className="text-muted mb-2" href="/">
                    Perbaiki
                  </p>
                  <p className="text-muted mb-2" href="/">
                    Eksekusi
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={2000}>
                <div className="col-6 col-md-3 d-flex flex-column">
                  <h6 className="mb-4 title mt-5 mt-md-0">Kontak Saya</h6>
                  <p className="text-muted mb-2">wibyfabian08@gmail.com</p>
                  <p className="text-muted mb-2">089663191201</p>
                  <a
                    href="https://github.com/WibyFabian08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted mb-2"
                  >
                    My GitHub
                  </a>
                </div>
              </Fade>
            </div>
            <Fade bottom delay={2500}>
              <div className="row d-flex justify-content-center pb-5">
                <p className="copyright">
                  Copyright 2021 • All rights reserved • Wiby Fabian Rianto
                </p>
              </div>
            </Fade>
          </div>
          <Fade bottom delay={3000}>
            <img
              src={Arrow}
              className="button-top position-absolute"
              onClick={toTheTop}
              alt=""
            ></img>
          </Fade>
        </footer>
      </Fade>
    </>
  );
};

export default Footer;

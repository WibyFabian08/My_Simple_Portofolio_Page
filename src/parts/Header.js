import React from "react";
import Fade from "react-reveal/Fade";

const Header = () => {
  function showMySkill() {
    window.scrollTo({
      top: 0 + 600,
      behavior: "smooth",
    });
  }

  function showMyjob() {
    window.scrollTo({
      top: 0 + 1150,
      behavior: "smooth",
    });
  }
  return (
    <Fade top>
      <header className="header spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              <span style={{ color: "#3252DF" }}>About</span>{" "}
              <span style={{ color: "#152C5B" }}>Wiby's</span>
            </a>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <button className="nav-link">
                    My Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={showMySkill} className="nav-link">
                    Skills
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={showMyjob}>
                    My Job
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Header;

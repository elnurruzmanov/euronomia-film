import React from "react";
import "./Home.css";

//routers
import { Link } from "react-router-dom";


//Images
import Eunomia from "../../images/eunomia.png";
import Meteorit from "../../images/meteorites1.png";
import Meteorit2 from "../../images/meteorites2.png";
import Meteorit3 from "../../images/meteorites3.png";
import Meteorit4 from "../../images/meteorites4.png";
import Meteorit5 from "../../images/meteorites5.png";
import Meteorit6 from "../../images/meteorites6.png";
import Meteorit7 from "../../images/meteorites7.png";
import Meteorit8 from "../../images/meteorites8.png";
import Meteorit9 from "../../images/meteorites9.png";
import EunomiaEllipse from "../../images/nft21.png";
import Home21 from "../../images/home21.png";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Navbar />
        <div className="eunomia-info">
          <h1 className="eunomia-title">EUNOMIA</h1>
          <h1 className="eunomia-title2">FILM</h1>
          <Link to="/projects" className="projects22">
            See Projects
          </Link>
  
          <img src={Eunomia} alt="eunomia" className="eunomia-img" />

          <img src={Meteorit} alt="meteorites" className="meteorites" />

          <img src={Meteorit2} alt="meteorit2" className="meteorit2" />
          <img src={Meteorit3} alt="meteorit3" className="meteorit3" />
          <img src={Meteorit4} alt="meteorit4" className="meteorit4" />
          <img src={Meteorit5} alt="meteorit5" className="meteorit5" />
          <img src={Meteorit6} alt="meteorit6" className="meteorit6" />
          <img src={Meteorit7} alt="meteorit7" className="meteorit7" />
          <img src={Meteorit8} alt="meteorit8" className="meteorit8" />
          <img src={Meteorit9} alt="meteorit9" className="meteorit9" />
          <img src={EunomiaEllipse} alt="" className="eunomia-ellipse" />
          <img src={Home21} alt="" className="home21" />
        
        </div>
      </div>
    </div>
  );
};

export default Home;

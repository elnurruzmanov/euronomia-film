import React from "react";
import "./Founders.css";

//images
import Julia from "../../images/Julia.png";

//Navbar
import Navbar from "../Navbar/Navbar";

//images
import InstaLife from "../../images/Instalife.png"
import MoscowHill from "../../images/MoscowHill.png"
import Warhunt from "../../images/Warhunt.png"
import Holiday from "../../images/Holiday.png"
import Pauline from "../../images/Pauline.png"
import Suleyman from "../../images/Suleyman.png"
import Hit from "../../images/Hit.png"
import Bird from "../../images/Bird.png"
import Founders1 from "../../images/founders1.png"
import Founders2 from "../../images/founders2.png"



const Founders = () => {
  return (
    <div className="founders">
      <div className="container">
        <Navbar />
        <h1 className="founders-title">Julia Kim - von den Dreisch</h1>
        <div className="founders-info">
          <img src={Julia} alt="Julia Kim" className="founders-info_img" />
          <div className="founders_informations">
            <h3 className="founders_info-title">Information</h3>
            <p className="founders-text">
              Yulia graduated from Russian State University of Cinema (VGIK) in
              2003, Master Degree: History of Cinema <p className="span">Yulia started as a media
              event producer in Moscow working with filmmakers such as Francis
              Ford Coppola, Tom Tykwer and others. Produced shooting of the
              video interviews from the film festivals in Cannes, Berlin,
              Veniece, Locarno, and also produced shooting of the documentary
              tele-films for korean television companies KMB, MBC. Yulia led the
              photo- and video shooting department in Tashkeel Studio, Dubai.
              Yulia was the head SMM manager in Bolshoi theater</p>  Julia is a
              member of the jury of international independent film festivals in
              Busan, Abu Dhabi, North Cyprus and Vladivostok
            </p>
          </div>
        </div>
        <div className="films-info">
          <h1 className="films-info-title">FILMOGRAPHY </h1>
          <div className="films">
            <img className="films-name" src={InstaLife} alt="InstaLife" />
            <img className="films-name" src={MoscowHill} alt="MoscowHill" />
            <img className="films-name" src={Warhunt} alt="Warhunt" />
            <img className="films-name" src={Holiday} alt="Holiday" />
            <img className="films-name" src={Pauline} alt="Pauline" />
            <img className="films-name" src={Suleyman} alt="Suleyman" />
            <img className="films-name" src={Hit} alt="Hit" />
            <img className="films-name" src={Bird} alt="Bird" />
          </div>
        </div>
        <div className="founders-bgc">
          <img src={Founders1} alt="Founders-bgc" className="founders1" />
          <img src={Founders2} alt="Founders-bgc" className="founders2" />
        </div>
      </div>
    </div>
  );
};

export default Founders;

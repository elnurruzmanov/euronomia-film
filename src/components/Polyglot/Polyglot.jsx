import React from "react";
import "./Polyglot.css";

//images
import PolyGlotImg from "../../images/polyglot.jpg";

//navbar
import Navbar from "../Navbar/Navbar";

const Polyglot = () => {
  return (
    <div className="polyglot">
      <div className="container">
        <Navbar />
        <div className="polyglot-info">
          <img src={PolyGlotImg} alt="PolyglotImg" className="polyglot_img" />
          <div className="polyglot_info-infos">
            <h1 className="polyglot_info-title">POLYGLOTS</h1>
            <p className="polyglots-text">
              <span className="polyglot-span">Genre:</span>
              black comedy
            </p>
            <p className="polyglots-text">
              <span className="polyglot-span">Duration:</span>
              94 min
            </p>
            <p className="polyglots-text">
              <span className="polyglot-span">Production year:</span>
              2023
            </p>
            <p className="polyglots-text">
              <span className="polyglot-span">Director: </span>
              Antonio Zavala Kugler
            </p>
            <p className="polyglots-text">
              <span className="polyglot-span">Producers: </span>
              Yulia Kim - von den Driesch, Anna Rot, Victor Zevala Kugler
            </p>
          </div>
        </div>
        <div className="polyglot-description">
          <h2 className="description-info">DESCRIPTION</h2>
          <p className="description-text">
            Moscow. English speaking club. Muscovites meet native speakers in
            this club for money and talk on various topics for language
            practice. The owner of the club, American John, set his own rules in
            the club. The first rule of the club is to speak only English. The
            second rule of the club is that people over forty are not allowed to
            enter: this place is only for young people. <p className="polyglots-span"> Vasily appears in the
            club – he came to speak with his girlfriend Masha. A few days ago,
            he flared up and left her, and now he decided to return her back,
            but everything is not so simple. To return his beloved,
            forty-year-old Vasily will fight with English, which he studied at
            school a long time, as well as with John, who sets his own rules.
            And all – under close attention and with the participation of other
            members of the club.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Polyglot;

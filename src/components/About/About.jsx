import React from "react";
import "./About.css";

import Navbar from "../Navbar/Navbar";

//images

import Line from "../../images/Line.png";

import aboutGroup from "../../images/aboutGroup.png";
import aboutRights from "../../images/about-right.png";
import aboutLefts from "../../images/aboutLefts.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

//images
import aboutSwiper from "../../images/aboutSwiper1.jpg";
import aboutSwiper2 from "../../images/aboutSwiper2.jpg";
import aboutSwiper3 from "../../images/aboutSwiper3.jpg";
import aboutSwiper4 from "../../images/aboutSwiper4.jpg";
import aboutSwiper5 from "../../images/aboutSwiper5.jpg";

import aboutRights2 from "../../images/about-rights2.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <Navbar />
        <div className="about-info">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                src={aboutSwiper}
                alt="aboutSwiper"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper2}
                alt="aboutSwiper2"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper3}
                alt="aboutSwiper3"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper4}
                alt="aboutSwiper4"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper5}
                alt="aboutSwiper5"
                className="about-swiper"
              />
            </SwiperSlide>
          </Swiper>

          <div className="about-us">
            <div className="about-titles">
              <h2 className="about-title">ABOUT US</h2>
              <img src={Line} alt="Line" className="line" />
            </div>
            <p className="about_img-title">Eunomia film's team</p>
            <p className="about_img-text">During filming the Lunik-3 </p>
            <p className="about-text">
              «Eunomia Film» is a film company founded in 2021 by the producer
              of documentaries, feature films and serials Yulia Kim - von den
              Dreisch. We produce content for platforms and wide theatrical
              distribution in Russia and abroad. We collaborate with
              world-famous directors, producers and actors to create films that
              participate in international film festivals. In the near future,
              we plan to release an animation project for viewers of all ages
              <p className="span">
                Eunomia Film» also provides services for foreign film companies,
                assists in obtaining filming permits and carries out the entire
                production cycle
              </p>
            </p>
            <img src={aboutGroup} alt="aboutGroup" className="about-group" />
          </div>
        </div>
        <img src={aboutRights} alt="aboutRights" className="about-rights" />
        <img src={aboutLefts} alt="aboutLeft" className="about-lefts" />
        <img src={aboutRights2} alt="about-rights2" className="about-rights2" />
      </div>
    </div>
  );
};

export default About;

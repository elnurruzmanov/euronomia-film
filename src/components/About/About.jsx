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
import aboutSwiper6 from "../../images/aboutSwiper6.jpg";
import aboutSwiper7 from "../../images/aboutSwiper7.jpg";
import aboutSwiper8 from "../../images/aboutSwiper8.jpg";
import aboutSwiper9 from "../../images/aboutSwiper9.jpg";
import aboutSwiper10 from "../../images/aboutSwiper10.jpg";
import aboutSwiper11 from "../../images/aboutSwiper11.jpg";
import aboutSwiper12 from "../../images/aboutSwiper12.jpg";
import aboutSwiper13 from "../../images/aboutSwiper13.jpg";
import aboutSwiper14 from "../../images/aboutSwiper14.jpg";
import aboutSwiper15 from "../../images/aboutSwiper15.jpg";
import aboutSwiper16 from "../../images/aboutSwiper16.jpg";
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
            <SwiperSlide>
              <img
                src={aboutSwiper6}
                alt="aboutSwiper6"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper7}
                alt="aboutSwiper7"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper8}
                alt="aboutSwiper8"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper9}
                alt="aboutSwiper9"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper10}
                alt="aboutSwiper10"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper11}
                alt="aboutSwiper11"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper12}
                alt="aboutSwiper12"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper13}
                alt="aboutSwiper13"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper14}
                alt="aboutSwiper14"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper15}
                alt="aboutSwiper15"
                className="about-swiper"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={aboutSwiper16}
                alt="aboutSwiper16"
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

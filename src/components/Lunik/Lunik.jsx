import React from 'react'
import "./Lunik.css"

import Navbar from '../Navbar/Navbar'

//images
import LunikImg from "../../images/lunik3.png"

const Lunik = () => {
  return (
    <div className="luniks">
      <div className="container">
        <Navbar />
        <div className="lunik-info">
          <img src={LunikImg} alt="LunikImg" className='lunik_img' />
          <div className="lunik_info-infos">
            <h1 className="lunik_info-title">Lunik - 3</h1>
            <p className="lunik-text">
              <span className="lunik-span">Genre:</span>
              drama, comedy
            </p>
            <p className="lunik-text">
              <span className="lunik-span">Duration:</span>
              90 min
            </p>
            <p className="lunik-text">
              <span className="lunik-span">Production year:</span>
              2023
            </p>
            <p className="lunik-text">
              <span className="lunik-span">Director: </span>
              Oleg Asadulin, Yulia Kim - von den Driesch
            </p>
            <p className="lunik-text">
              <span className="lunik-span">Screenwriter:</span>
              Rodion Beletski
            </p>
          </div>
        </div>
        <div className="lunik-description">
          <h2 className="description-info">DESCRIPTION</h2>
          <p className="description-text">
            Lunik-3 is based on (possibly) real facts, according to which the Russian satellite, which transmitted the first images of the dark side of the moon to Earth, was dismantled in Mexico in 1959. Recently declassified documents reveal a CIA plot to force Mexican agents to open Lunic 3 to help the US win the space race against the USSR.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Lunik
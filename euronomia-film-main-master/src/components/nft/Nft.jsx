import React from "react";
import "./Nft.css";

//Navbar
import Navbar from "../Navbar/Navbar";

//images
import NftImg from "../../images/nft-img.png"
import NftImg2 from "../../images/nft-image.png"
import NftImg3 from "../../images/nft-image2.png"
import nftEllipse from "../../images/nft-ellipse.png"
import nft21 from "../../images/nft21.png"


const Nft = () => {
  return (
    <div className="nft">
      <div className="nfts">
        <div className="nft3">
          <div className="nft2">
            <div className="container">
              <Navbar />
              <h1 className="nft-title">
                the page you are visiting on reconstruction
              </h1>
              <img src={NftImg} alt="nft-img" className="nft-img" />
              <img src={NftImg2} alt="nft-img" className="nft-image" />
              <img src={NftImg3} alt="nft-img" className="nft-image2" />
              <img src={nftEllipse} alt="nft-ellipse"  className="ellipse-nft" />
              <img src={nft21} alt="nft-ellipse"  className="nft21" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;

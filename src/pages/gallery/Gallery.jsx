import React from 'react';
import '../gallery/Gallery.css';
import { SlideNumbers, ArrowTabs } from '../../components/arrowTabs/ArrowTabs';
import S2image1 from '../../assets/images/S2image1.jpg';
import S2image2 from "../../assets/images/S2image2.jpg";
import S2image3 from "../../assets/images/S2image3.jpg";
import S2image4 from "../../assets/images/S2image4.jpg";
import S2image5 from "../../assets/images/S2image5.jpg";
import S2image6 from "../../assets/images/S2image6.jpg";
import S2image7 from "../../assets/images/S2image7.jpg";
import S2image8 from "../../assets/images/S2image8.jpg";
import S2image9 from "../../assets/images/S2image9.jpg";
import S2image10 from "../../assets/images/S2image10.jpg";

const Gallery = () => {
  return (
    <div className="galleryContainer">
      <div>
        <h3 className="photo">Photo</h3>
        <h3 className="gallery">Gallery</h3>
      </div>
      <div className="galleryImages">
        <img src={S2image1} alt="Image" />
        <img src={S2image2} alt="Image" />
        <img src={S2image3} alt="Image" />
        <img src={S2image4} alt="Image" />
        <img src={S2image5} alt="Image" />
        <img src={S2image6} alt="Image" />
        <img src={S2image7} alt="Image" />
        <img src={S2image8} alt="Image" />
        <img src={S2image9} alt="Image" />
        <img src={S2image10} alt="Image" />
      </div>
      <div className='galleryArrows'>
        <SlideNumbers
        numbers='number2' 
        num3='05'
        p3='pee'
        />
        <ArrowTabs />
      </div>
    </div>
  );
}

export default Gallery
import React from 'react';
import '../projects/OurProjects.css';
import image5 from '../../assets/images/image5.jpg';
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image8 from "../../assets/images/image8.jpg";
import image9 from "../../assets/images/image9.jpg";
import arrowrightWhite from "../../assets/images/arrow-2-right-white.svg";
import Button from '../button/Button';
import { Link } from 'react-router-dom';


const OurProjects = () => {
  return (
    <div className="ourProjectContainer">
      <h3>Our Projects</h3>
      <div className="ourProjectContent">
        <div className="topLayer">
          <div className="image5Container">
            <div className="image5Cont">
              <h4>
                Sample <br />
                Project
              </h4>
              <div className="image5Btn">
                <Button
                  text="VIEW MORE"
                  button="button3"
                  icons="icon3"
                  img={<img src={arrowrightWhite} alt="White Arrow" />}
                />
              </div>
            </div>
            <img className="image5" src={image5} alt="" />
          </div>
          <img src={image6} alt="" />
        </div>
        <div className="bottomLayer">
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <img src={image9} alt="" />
        </div>
      </div>
      <div className="ourProjectBtn">
        <Link to="/projects">
          <Button
            text="ALL PROJECTS"
            button="button2"
            icons="icon4"
            img={<img src={arrowrightWhite} alt="White Arrow" />}
          />
        </Link>
      </div>
    </div>
  );
}

export default OurProjects
import React from 'react';
import '../home/Home.css';
import image1 from '../../assets/images/image1.jpg';
import { ArrowTabs, SlideNumbers } from '../../components/arrowTabs/ArrowTabs';
import Button from '../../components/button/Button';
import About from '../../components/about/About';
import { MissionStatement } from '../../components/about/About';
import OurProjects from '../../components/projects/OurProjects';
import ContactUs from '../../components/contact/ContactUs';
import arrowright from "../../assets/images/arrow-2-right-long.svg";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="left">
          <div className="heroText">
            <h2>PROJECT</h2>
            <h3>Lorum</h3>
          </div>
          <div className='homeArrows'>
            <ArrowTabs />
            <SlideNumbers numbers="number1" num3="02" />
          </div>
          <div className="heroButton">
            <Link to="/projects">
              <Button
                text="VIEW PROJECTS"
                button="button1"
                icons="icon"
                img={<img src={arrowright} alt="" />}
              />
            </Link>
          </div>
        </div>
        <div className="heroImage">
          <img src={image1} alt="hero Image" />
        </div>
      </section>
      <About />
      <MissionStatement />
      <OurProjects />
      <ContactUs />
    </div>
  );
}

export default Home
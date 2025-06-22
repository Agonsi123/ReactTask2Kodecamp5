import React from 'react';
import '../ourProjects/Projects.css';
import S3image1 from '../../assets/images/S3image1.jpg';
import S3image2 from "../../assets/images/S3image2.jpg";
import S3image3 from "../../assets/images/S3image3.jpg";
import { ArrowTabs } from '../../components/arrowTabs/ArrowTabs';
import { SlideNumbers } from '../../components/arrowTabs/ArrowTabs';
import Button from '../../components/button/Button';
import arrowright from '../../assets/images/arrow-2-right-long.svg'

const Projects = () => {
  return (
    <div className="projectContainer">
      <div className="projectHeading">
        <h3 className="our">Our</h3>
        <h3 className="pro">Projects</h3>
      </div>
      <div className="projectContent">
        <img className='projectContentImage' src={S3image1} alt="image" />
        <div className="projectText">
          <h4>Sample Project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam provident facilis
            praesentium, temporibus placeat voluptatum totam quos? Natus expedita tempore doloribus
            neque. Sint laborum exercitationem, hic eveniet pariatur dignissimos asperiores, saepe
            nisi dolor assumenda error quibusdam quis magnam accusamus beatae.
          </p>
          <Button
            text="VIEW MORE"
            button="button4"
            icons="icon2"
            img={<img src={arrowright} alt="arrowright" />}
          />
        </div>
      </div>
      <div className="projectContent">
        <img className='projectContentImage' src={S3image2} alt="image" />
        <div className="projectText">
          <h4>Sample Project 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam provident facilis
            praesentium, temporibus placeat voluptatum totam quos? Natus expedita tempore doloribus
            neque. Sint laborum exercitationem, hic eveniet pariatur dignissimos asperiores, saepe
            nisi dolor assumenda error quibusdam quis magnam accusamus beatae.
          </p>
          <Button
            text="VIEW MORE"
            button="button4"
            icons="icon2"
            img={<img src={arrowright} alt="arrowright" />}
          />
        </div>
      </div>
      <div className="projectContent">
        <img className='projectContentImage' src={S3image3} alt="image" />
        <div className="projectText">
          <h4>Sample Project 3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam provident facilis
            praesentium, temporibus placeat voluptatum totam quos? Natus expedita tempore doloribus
            neque. Sint laborum exercitationem, hic eveniet pariatur dignissimos asperiores, saepe
            nisi dolor assumenda error quibusdam quis magnam accusamus beatae.
          </p>
          <Button
            text="VIEW MORE"
            button="button4"
            icons="icon2"
            img={<img src={arrowright} alt="arrowright" />}
          />
        </div>
      </div>
      <div className="projectArrow">
        <SlideNumbers numbers="number2" num3="05" p3="pee" />
        <ArrowTabs />
      </div>
    </div>
  );
}

export default Projects































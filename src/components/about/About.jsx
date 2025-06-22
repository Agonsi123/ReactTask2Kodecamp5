import React from 'react';
import '../about/About.css';
import Button from '../button/Button';
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import arrowright from "../../assets/images/arrow-2-right-long.svg";


const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutLeft">
        <div className="aboutImg">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="aboutImg2">
          <img src={image4} alt="" />
        </div>
      </div>
      <div className="aboutRight">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id aperiam sint tempore
          sequi. Ea iusto unde perspiciatis. Iste nihil impedit vitae voluptatibus autem fuga
          molestiae asperiores fugiat at distinctio repudiandae aperiam cupiditate eligendi nesciunt
          enim, velit perferendis. Distinctio ea ad quam laboriosam unde error. Necessitatibus
          aspernatur maiores cupiditate quasi.
        </p>
        <div className='readMoreBtn'>
          <Button
            text="READ MORE"
            button="button4"
            icons="icon2"
            img={<img src={arrowright} alt="arrowright" />}
          />
        </div>
      </div>
    </div>
  );
};

export default About

export const MissionStatement = () => {
  return (
    <div className="missionContainer">
      <h3>Main Focus/Mission Statement</h3>
      <div className="missionContent">
        <div className="missionCont">
          <h4>1</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quam voluptatum
            nemo dolorem cum laborum?
          </p>
        </div>
        <div className="missionCont">
          <h4>2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error delectus aliquam facilis fuga. Saepe aliquid ratione beatae officia sunt hic quae minima impedit!
          </p>
        </div>
      </div>
    </div>
  );
}

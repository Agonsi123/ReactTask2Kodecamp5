import React from 'react';
import '../arrowTabs/ArrowTabs.css';
import arrowLeft from "../../assets/images/arrow-2-left-long.svg";
import arrowRight from "../../assets/images/arrow-2-right-long.svg";

export const ArrowTabs = () => {
  return (
    <div className='arrows'>
      <div className='arrowContainer1'>
        <img src={arrowLeft} alt="" />
      </div>
      <div className='arrowContainer'>
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
};

export const SlideNumbers = ({ num3, numbers, p3}) => {
    return (
      <div className={`${numbers}`}>
        <div>
          <p>0</p>
          <p>1</p>
        </div>
        <div className="line"></div>
        <p className={`${p3}`}>{num3}</p>
      </div>
    );
}

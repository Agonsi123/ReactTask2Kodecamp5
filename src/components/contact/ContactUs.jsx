import React from 'react';
import '../contact/ContactUs.css';
import image10 from '../../assets/images/image10.jpg';
import Button from '../button/Button';
import arrowrightWhite from "../../assets/images/arrow-2-right-white.svg";


const ContactUs = () => {
  return (
    <div className='ContactUsContainer'>
        <h3>Contact Us</h3>
        <div className='ContactUsContent'>
            <form action="">
                <input type="text" name='name' placeholder='Name' />
                <input type="text" name="name" placeholder="Phone Number*" />
                <input type="text" name="name" placeholder="Email*" />
                <input type="text" name='name' placeholder='Interested In' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message*'></textarea>
            </form>
            <img src={image10} alt="" />
        </div>
        <div className='ContactUsBtn'>
            <Button 
            text='SEND EMAIL'
            button='button2'
            icons='icon4'
            img={<img src={arrowrightWhite} alt='White Arrow'/>}
            />
        </div>
    </div>
  )
}

export default ContactUs
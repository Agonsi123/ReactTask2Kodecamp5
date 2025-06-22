import React from 'react';
import '../button/Button.css';


const Button = (props) => {
  return (
    <div className={`${props.button}`}>
        <button>
            {props.text}
        </button>
        <div className={`${props.icons}`}>
            {props.img}
        </div>
    </div>
  )
};



export default Button
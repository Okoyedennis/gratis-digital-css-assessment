import React from 'react'
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer__icon">
        <AiOutlineYoutube className="icon" />
        <AiOutlineFacebook className="icon" />
        <AiOutlineInstagram className="icon" />
        <AiFillTwitterSquare className="icon" />
      </div>
      <div className="footer__text">
        <p>Terms of services</p>
        <p>Privacy policy</p>
      </div>
      <p className='footer__bottom-text'>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
    </div>
  );
}

export default Footer
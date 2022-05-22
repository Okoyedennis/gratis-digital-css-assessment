import React from 'react'
import ComingSoon from '../ComingSoon/ComingSoon'
import "./Contact.css"
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <ComingSoon />
      </div>
      <div className="contact__wrapper">
        <h4>Hey, we are still in the works, but you can send us a message!</h4>
        <form className="container">
          <label htmlFor="">First name</label>
          <input type="text" placeholder="Enter your First name" />
          <label htmlFor="">Last name</label>
          <input type="text" placeholder="Enter your Last name" />
          <label htmlFor="">Email address</label>
          <input type="text" placeholder="Enter your Email Address" />
          <label htmlFor="">Tell us what you need help with:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className=''>SEND NOW</button>
          <Link className='back' to="/">Back</Link>
        </form>
      </div>
    </>
  );
}

export default Contact
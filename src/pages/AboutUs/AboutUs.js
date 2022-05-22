import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import "./AboutUs.css"
import {AiOutlineLine} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {HiOutlineArrowRight} from "react-icons/hi"
import Footer from '../../component/Footer/Footer'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about__banner container">
        <div className="about__banner-left" />
        <div className="about__banner-right">
          <div className="about-title">
            <div className="slide">
              <AiOutlineLine className="icon" />
            </div>
            <p>About Us</p>
          </div>
          <h4>
            Built for Saas <br /> and E-commerce
          </h4>
          <div className="about__design" />
          <div className="about__banner-right__bottom">
            <p>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
        </div>
      </div>
      <section className="container">
        <h1>
          Metricks was developed because just like you, we needed a product that
          could give us good value.
        </h1>
      </section>
      <section className="spec">
        <div className="about__second-row container">
          <div className="about_row-left">
            <div className="about_row-header">
              <div className="about_underline">
                <p>1</p>
                <AiOutlineLine className="icon" />
              </div>
              <p>WHY US? </p>
            </div>
            <div className="about_row-content">
              <p>
                We pride ourselves in our ability to innovate and create
                world-class tools that provide reliable and efficient
                touchpoints between advertisers and affiliates.
              </p>
            </div>
          </div>
          <hr />
          <div className="about_row-right">
            <div className="about_row-header">
              <div className="about_underline">
                <p>2</p>
                <AiOutlineLine className="icon" />
              </div>
              <p>GROWING WITH YOU </p>
            </div>
            <div className="about_row-content">
              <p>
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns, all from
                one dashboard.
              </p>
              <p className="last-child">
                Our team of experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='about__question'>
          <div className="about__question-content container">
                <h3>Got a Question?</h3>
                <p>
                See how Metricks can help your business grow with best Affiliate
                Marketing Tracking Software.
                </p>
                <div className="contactLink">
                <Link to="/contact">Contact us</Link>
                <HiOutlineArrowRight className='icon'/>
                </div>
          </div>
      <Footer />
      </section>
    </div>
  );
}

export default AboutUs
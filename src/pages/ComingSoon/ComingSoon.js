import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Banner from "../../component/Banner/Banner"
import Footer from '../../component/Footer/Footer';

const ComingSoon = () => {
  return (
    <div className='comingSoon'>
      <Navbar />
      <Banner countdownTimestampMs={1659983662000} />
      <Footer />
    </div>
  );
}

export default ComingSoon
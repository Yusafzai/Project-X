import React from 'react';
import Slider from 'infinite-react-carousel';
import './SimpleSlider.css';
import AppleOne from './image1.png';
import AppleTwo from './image2.png';

const SimpleSlider = () => (
    <div className="sliding flex justify-center">

  <Slider dots className="dots w-96 h-20">
    <div>
      <img className="iphonew" src={AppleOne} alt="a1"/>
    </div>
    <div>
      <img className="iphones" src={AppleTwo} alt="a2"/>
    </div>
  </Slider>

  </div>
);

export default SimpleSlider

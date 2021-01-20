import React from 'react';
import Tomo from './car.mp4';
import './Video.css';
import Tesy from './tesy.jpg';

function Video() {
    return (
        <div>
            <video className="this w-full" poster={Tesy} src={Tomo} controls></video>
        </div>
    )
}

export default Video

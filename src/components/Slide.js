import React from 'react';
import './Slide.css';


function Slide() {
    return (
        <div className="Slide w-full flex justify-center">
            
           <div>
               <h1 className="texts1">Feature Rich. No bloat.</h1>
               <h2 className="texts2">Carge application is more than an eMSP*.</h2>
           </div>

           <div>
           <button className="b1 w-32 h-8 rounded-md ring-1 ring-gray-100 bottom-1 relative hover:bg-blue-400 transition duration-700">take a tour</button>
           </div>

        </div>
    )
}

export default Slide

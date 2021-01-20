import React from 'react';
import './Tag.css';

function Tag() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-full h-60">
            
          <div className="top flex justify-start">
               <h1 className="text1">Carge 'n' Win</h1>
               <h2 className="text2">Every kWh counts! Get free credits for your next charging session <br/> easily. The more you charge, the more you win.</h2>
          </div>
          
          <div className="flex justify-end">
               <h1 className="text3">24/7 Support</h1>
               <h2 className="text4">Have peace of mind with round-the-clock support from a special <br/> team of EV experts, that will assist you on-the-go.</h2>
          </div>

        </div>
    )
}

export default Tag

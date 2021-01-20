import React from 'react';
import './Map.css';
import Logo from './map.png';
import Laga from './card.png';

function Map() {
    return (
        <div className="Map w-full">
            
          <div className="flex justify-end">
          <img className="lag w-96 ml-96 mt-20" src="https://carge.co/wp-content/uploads/2020/10/map-768x383.png" alt="maps"/>
          </div>

          <div className="flex justify-start">
              <img className="goal w-20" src={Logo} alt="map"/>
              <h1 className="textone relative">Borderless Charging</h1>
              <h2 className="texttwo relative">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enjoy full charging access to more than <br/>
                  130,000 publicly accessible charge points in 15+ countries. <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Drive effortlessly!</h2>
          </div>

          <div className="flex justify-start">
              <img className="goal2 w-20" src={Laga} alt="map"/>
              <h1 className="textone2 relative">International Billing</h1>
              <h2 className="texttwo2 relative">Add payment method once. Gather all costs in one single place and <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compare CPOs' fees, through your invoices. <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No hidden costs - no upfront payments.</h2>
          </div>

          <div className="flex justify-end">
          <img className="lag2 w-96 ml-96 mt-20" src="https://carge.co/wp-content/uploads/2020/10/paym-1.png" alt="tester123"/>
          </div>

        </div>
    )
}

export default Map

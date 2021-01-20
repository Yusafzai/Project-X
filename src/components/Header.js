import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className="Header">
            {/* FULL COMPONENT */}
         <div className="bg-gradient-to-r from-green-500 to-blue-600 h-screen w-full">
                
              {/* LOGO PART   */}
           <div className="flex flex-row">
            <a href="/"><img className="relative w-40 ml-40 m-6" src="https://carge.co/wp-content/uploads/2020/10/carge-prototype-logo-website-182x44.png" alt="car logo"/></a>

           </div>

           
               {/* LEFT A TAGS */}
             <div className="lefter flex justify-end mr-32 relative text-gray-100 space-x-6 bottom-14">
              <a className="first" href="/">Features</a>
              <a className="second" href="/">Help Center</a>
              <a className="third" href="/">Blog</a>
              <button className="w-20 h-8 rounded-md ring-1 ring-gray-100 bottom-1 relative hover:bg-gray-700 transition duration-700">Beta</button>
            </div>
           

            
             {/* CONTENT */}
             <div className="">
              <h1 className="flex ml-56 mt-32 text-white text-6xl">Charge your EV <br/> effortlessly <br/> throughout <br/> Europe</h1>
              <h2 className="text-white ml-56 mt-2 text-sm">Seek. Book. Plug. Pay. Go.</h2>
              <a href="/"><img className="relative flex ml-56 mt-6 h-14" src="https://carge.co/wp-content/uploads/2020/12/1280px-Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk-e1608632794211-238x80.png" alt="apple"/></a>
              <a href="/"><img className="relative flex ml-96 left-8 bottom-14 h-14" src="https://carge.co/wp-content/uploads/2020/12/google-play-badge-1.png" alt="apple"/></a>
             </div>

    
             <div className="justify-end flex h-20">
                 <a href="/"><img className="iphone mr-44" src="https://carge.co/wp-content/uploads/2020/12/iPhone-12-Pro-1-1.png" alt="iphone image"/></a>
            </div>

         </div>


        </div>
    )
}

export default Header

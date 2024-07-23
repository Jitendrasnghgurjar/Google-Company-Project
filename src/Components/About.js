import React from 'react';
import aboutimg from './Assests/7123025_logo_google_g_icon.png'

const About = () => {
    return(
        <div id ="about">
            <div className="px-4 lg:p-14 max-w-screen-2xl mx-auto my-8 flex">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="ml-12 md:w-3/5 max-auto">
                <h2 className="text-4xl text-gray-800 font-semibold mb-4 md:w-4/5">  
                About   
                </h2>
                <p className="md:w-3/4 text-sm text-gray-800 mb-8">
                Google is currently the first name that pops into your head when
                 you enter the online world. Nearly everyone who uses the Internet is familiar
                  with this word and uses it in various ways, yet relatively few people fully understand 
                  what Google is. In actuality, Google is a multinational technology corporation that offers
                   users free services and goods relating to the Internet. Online ad techniques,
                    cloud computing for search, software, hardware, etc., are all included in this service.
                </p>  
                <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-stone-300 hover:text-gray-800">Learn more</button>   
                </div>
            </div>
            <img src={aboutimg} alt="About" className="w-72 mr-24"/>
        </div>
        </div>

        
        
    )
}
export default About
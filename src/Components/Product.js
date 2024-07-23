import React from 'react';
import { Card } from "flowbite-react";
 import  Card1 from './Assests/1000_F_408819182_dBy5H00vMJSLwW7.png';
 import Card2 from './Assests/Google-Drive-Feature-Encryption-removebg-preview.png'
 import Card3 from './Assests/87865_chrome_icon.png'
 import Card4 from './Assests/Google_Assistant-Logo.wine-removebg-preview.png'
 import Card5 from './Assests/youtube-logo-2431 (1).png'
 import Card6 from './Assests/Gmail_Logo_256px.png'
const Product = () => {
  return (
    <section id = "product">
    <h2  className = "text-4xl text-gray-800 font-semibold mb-2 text-center">Products</h2>
    <div  className = "flex flex-wrap justify-around">
    <Card className="max-w-60 md:w-80 my-20" horizontal>
      <img src= {Card1} alt = "image" className = "w-48 md:ml-5"/>
    
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Google Maps
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Get real-time GPS navigation, traffic, and transit info, and explore local neighborhoods by knowing where to eat, drink and go - no matter what part of the ...
    </p>
  </Card>

  <Card className="max-w-60 md:w-80 my-20" horizontal>
      <img src= {Card2} alt = "image" className = "w-60 md:ml-4"/>
    
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Google Drive
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Learn about Google Drive's file sharing platform that provides a personal, secure cloud storage option to share content with other users.
    </p>
  </Card>

  <Card className="max-w-60 md:w-80 my-20" horizontal>
      <img src= {Card3} alt = "image" className = "w-28 md:ml-20"/>
    
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Google Chorme
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Chrome is the official web browser from Google, built to be fast, secure and customisable. Download now and make it yours.
    </p>
  </Card>

 

  </div>

  <div  className = "flex flex-wrap justify-around">
    <Card className="max-w-60 md:w-80 my-20" horizontal>
      <img src= {Card4} alt = "image" className = "w-48 md:ml-8"/>
    
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Google Assistant
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Meet your Google Assistant. Ask it questions. Tell it to do things. It's your own personal Google, always ready to help whenever you need it.</p>
  </Card>

  <Card className="max-w-60 md:w-80 my-20" horizontal>
      <img src= {Card5} alt = "image" className = "w-32 md:ml-14"/>
    
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Google Youtube
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Share your videos with friends, family, and the world.
    </p>
  </Card>

  <Card className="max-w-60 md:w-80 my-20" horizontal>
      <img src= {Card6} alt = "image" className = "w-32 md:ml-14"/>
    
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Google Gmail
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Gmail offline lets you read, reply, delete, and search your Gmail messages when you're not connected to the internet.
    </p>
  </Card>

 

  </div>
  </section>
  )
}

export default Product;

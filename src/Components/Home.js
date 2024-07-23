import React from 'react'
import { Carousel } from "flowbite-react";
import slide from './Assests/wired-uk-google-watching-removebg-preview.png'
import slide2 from './Assests/google-lens-camera-logo-hero-removebg-preview.png'
import slide3 from './Assests/GooglePhotos-Art-removebg-preview.png'
function Home() {
  return (
    <div className='bg-slate-200' id = 'home'>
      <div className= 'px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
    <Carousel className= "w-full mx-auto">
        <div className="flex h-full items-center justify-center">

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">

            <div>

                <img src= {slide} alt='slide' className = 'w-60 mt-7 md:w-96 mr-8'/>

            </div>

            <div className = "md:w-1/2">

                <h3 className = 'text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug'>Google Access the <span className = ' text-gray leading-snug'>World's Information.</span></h3>

                <p className = 'text-gray-800 text-base mb-8'>Google is also the largest search engine.</p>

                <button className = "px-6 py-2 bg-gray-800 text-white rounded hover:bg-stone-300 hover:text-gray-800">Register</button>

            </div>

        </div>
        </div>
        <div className="flex h-full items-center justify-center">

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">

            <div>

                <img src= {slide2} alt='slide' className = 'w-60 mt-7 md:w-96 mr-8'/>

            </div>

            <div className = "md:w-1/2">

                <h3 className = 'text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug'>Visual Search made<span className = ' text-gray leading-snug'> Easy</span></h3>

                <p className = 'text-gray-800 text-base mb-8'>Explore the World With Google Lens.</p>

                <button className = "px-6 py-2 bg-gray-800 text-white rounded hover:bg-stone-300 hover:text-gray-800">Register</button>

            </div>

        </div>
        </div><div className="flex h-full items-center justify-center">

<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">

    <div>

        <img src= {slide3} alt='slide' className = 'w-60 mt-7 md:w-96 mr-8'/>

    </div>

    <div className = "md:w-1/2">

        <h3 className = 'text-4xl font-semibold mb-4 text-gray-800 md:w-3/4 leading-snug'>Relive Memories with <span className = ' text-gray leading-snug'> Google Photos</span></h3>

        <p className = 'text-gray-800 text-base mb-8'>Preserve and Relive your Memories With Google Photos.</p>

        <button className = "px-6 py-2 bg-gray-800 text-white rounded hover:bg-stone-300 hover:text-gray-800">Register</button>

    </div>

</div>
</div>
        </Carousel>
  

     </div>
     </div>
  )
}

export default Home



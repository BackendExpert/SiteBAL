import React from 'react'
import HPRight from '../../assets/HomePageRight.png'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-purple-300/10 pt-20 px-6'>
        <div className="md:flex justify-between">
            <div className="w-full md:pt-40 md:mb-0 mb-16">
                <p className="text-gray-500 md:text-5xl text-3xl md:leading-[60px] titleFont">Unleashing the Power of Technology for Your Success with <span className='titleFont text-purple-600'>Black alpha labs</span></p>

                <p className="md:mt-24 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis asperiores tempora sunt quisquam est ullam deserunt assumenda quasi doloremque at debitis quidem, amet ea magnam, voluptate dignissimos, ex eligendi.
                    Vitae quasi nisi soluta fugiat similique, voluptates blanditiis, cupiditate error voluptatum exercitationem sapiente id esse eius praesentium, commodi suscipit sint natus. Provident quos repudiandae, eum alias reiciendis totam voluptas eveniet.
                </p>

                <div className="mt-8">
                    <button className='bg-purple-600 text-white py-4 px-16 rounded-full duration-500 hover:bg-purple-700'>Get Started</button>
                </div>
            </div>
            <div className="w-full md:block hidden">
                <img src={HPRight} alt="" />
            </div>
        </div>

        <div className="pb-8 md:px-8">
            <h1 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 ">About Us</h1>
            <div className="md:flex mt-20">
                <div className="md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl">
                    <h1 className="text-purple-600 text-xl font-semibold text-center">Welcome to BlackAlphaLabs</h1>
                    <p className="my-4">
                        At <span className='text-purple-600 font-semibold'>BlackAlphaLabs</span>, we are more than just a software company; we are innovators, creators, and problem-solvers dedicated to transforming ideas into reality. Founded with a passion for technology and a commitment to excellence, we strive to deliver cutting-edge solutions that empower businesses to thrive in the digital age.
                    </p>
                </div>
                <div className="md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl">
                    <h1 className="text-purple-600 text-xl font-semibold text-center">Our Story</h1>
                    <p className="my-4">
                        <span className='text-purple-600 font-semibold'>BlackAlphaLabs</span> was born out of a desire to create a company that not only excels in technology but also makes a meaningful impact. Our founders, with years of experience in the software industry, recognized the growing need for custom solutions that address specific business challenges. What started as a small team of passionate developers has grown into a full-fledged software company, serving clients across various industries.
                    </p>
                </div>
            </div>

            <div className="md:flex my-8">
                <div className="md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl">
                    <h1 className="text-purple-600 text-xl font-semibold text-center">Our Story</h1>
                </div>
                <div className="md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl"></div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
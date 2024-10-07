import React from 'react'
import BtnDefault from '../../components/Buttons/BtnDefault'
import AboutUsImg from '../../assets/AboutUs.png'

const AboutAs = () => {
  return (
    <div className='min-h-screen bg-white md:pt-2 pt-24 px-0'>
        <div className="md:flex justify-between md:mb-16 md:px-24 px-6 md:min-h-screen">
            <div className="w-full md:pt-40 md:mb-0 mb-16">
                <h1 className="text-gray-500 md:text-4xl font-semibold text-xl md:leading-[50px]"><span className='text-purple-800'>About Us</span></h1>
                <p className="md:mt-8 mt-4 titleText">
                    BlackAlphaLabs is a leading software development company dedicated to delivering innovative and customized technology solutions. With a passion for excellence and a commitment to client satisfaction, we specialize in helping businesses of all sizes leverage the power of technology to achieve their goals.
                </p>

                <div className="mt-8">
                    <a href="#CurrentCareer">
                        <BtnDefault btnTitle={"View Careers"}/>
                    </a>
                </div>
            </div>
            <div className="w-full md:block hidden mt-20">
                <img src={AboutUsImg} alt="" />
            </div>
        </div>


        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Our Mission</h1>
            <p className="text-gray-500 mt-4">
            Our mission is to empower businesses through technology, enabling them to streamline operations, enhance user experiences, and stay ahead in a competitive market. We believe in building partnerships with our clients, providing solutions that not only meet their needs today but also prepare them for future challenges.
            </p>
        </div>


        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Our Values</h1>
            <p className="text-gray-500 mt-4">
            Our mission is to empower businesses through technology, enabling them to streamline operations, enhance user experiences, and stay ahead in a competitive market. We believe in building partnerships with our clients, providing solutions that not only meet their needs today but also prepare them for future challenges.
            </p>
        </div>
    </div>
  )
}

export default AboutAs
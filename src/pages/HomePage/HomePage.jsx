import React from 'react'
import HPRight from '../../assets/HomePage.png'
import { BsDot } from 'react-icons/bs'
import ServiceImg from '../../assets/Service.png'
import OurPortfolio from './OurPortfolio'
import ComLogo from '../../assets/Logo.png'
import BtnDefault from '../../components/Buttons/BtnDefault'
import Typewriter from './TypeWriter'
import { TypeAnimation } from 'react-type-animation';
import UserSay from './UserSay'
import OurTeam from './OurTeam'
import Tech from './Tech'
import LogoNew from '../../assets/LogoNew.png'

const HomePage = () => {
    const services = [
        {id: 1, name: 'Web Development', img: ServiceImg},
        {id: 2, name: 'IT Consulting', img: ServiceImg},
        {id: 3, name: 'Cloud Solutions', img: ServiceImg},
        {id: 4, name: 'UI/UX Design', img: ServiceImg},
        {id: 5, name: 'API Development and Integration', img: ServiceImg},      
        {id: 6, name: 'IT Support and Maintenance', img: ServiceImg},      
    ]

  return (
    <div className='min-h-screen bg-white md:pt-2 md:pt-24 pt-12 px-0'>
        <div className="md:flex justify-between md:px-24 px-6">
            <div className="w-full pt-28 md:pt-32 md:mb-0 text-center md:text-left min-h-screen">
                <img src={LogoNew} alt="" className="h-24 w-auto md:h-32 mx-auto md:mx-0"/>
                <p className="text-gray-500 font-semibold text-2xl md:text-4xl md:leading-[50px] mt-4 md:mt-0">
                    We Create and Innovate 
                </p>
                
                <h1 className="text-2xl md:text-3xl font-semibold text-purple-500 mt-2 md:mt-0">
                    Software Solutions
                </h1>
                
                <p className="mt-4 md:mt-8 text-base md:text-lg font-semibold">
                    Professional businesses understand the value of bespoke
                </p>
                
                <p className="text-base md:text-lg font-semibold">
                    software in achieving new heights of success.
                </p>
                
                <div className="mt-6 md:mt-8">
                    <BtnDefault btnTitle={"Get Started"}/>
                </div>
            </div>

            <div className="w-full md:block hidden">
                <img src={HPRight} alt="" />
            </div>
        </div>

        {/* about us */}
        <div className="pb-8 md:px-24 px-6 bg-purple-500/20">
            <div className="md:flex py-24">
                <div data-aos="fade-up" className="w-full">
                    <center><img src={ComLogo} alt="" className='rounded-2xl'/></center>
                    <h1 className="text-center uppercase font-bold mt-4 text-purple-800">Black alpha labs</h1>
                </div>
                <div data-aos="fade-down" className="w-full md:mt-0 mt-6">
                    <h1 className="text-purple-600 text-xl font-semibold text-center">Welcome to BlackAlphaLabs</h1>
                    <p className="my-4">
                        At <span className='text-purple-600 font-semibold'>BlackAlphaLabs</span>, we are more than just a software company; we are innovators, creators, and problem-solvers dedicated to transforming ideas into reality. Founded with a passion for technology and a commitment to excellence, we strive to deliver cutting-edge solutions that empower businesses to thrive in the digital age.
                    </p>
                    <BtnDefault btnTitle={"About Us"} />
                </div>
            </div>

        </div>

        {/* end about us */}


        <div className="pb-8 md:px-24 px-8 py-20">
            <h1 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 ">Our Services</h1>

            <div className="md:grid grid-cols-3 gap-6 my-16">
                {
                    services.map((service, index) => {
                        return (
                            <div data-aos="flip-left" key={index} className="w-full py-4 px-6 bg-white border border-purple-500 duration-500 rounded-xl hover:shadow-xl mb-1">
                                <center><img src={service.img} alt="" className='h-40 w-auto'/></center>
                                <h1 className="text-center text-xl">{service.name}</h1>
                            </div>
                        )
                    })
                }
            </div>

            <div className="">
                <center>
                    <a href="">
                        <div className="mt-8">
                            <BtnDefault btnTitle={"Get Started"} />
                        </div>
                    </a>
                </center>
            </div>
        </div>  

        
        <div className="pb-8 md:px-24 px-8 bg-purple-500/20">
            <OurPortfolio />
        </div>  

        <div className="pb-16 md:px-24 px-8 bg-white">
            <OurTeam />
        </div>  

        {/* <div className="pb-8 md:px-24 px-8 bg-purple-500/20">
            <UserSay />
        </div> */}

        <div className="pb-16 md:px-24 px-8 bg-white">
            <Tech />
        </div>  
 
        
    </div>
  )
}

export default HomePage
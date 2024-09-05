import React from 'react'
import HPRight from '../../assets/HomePageRight.png'
import { BsDot } from 'react-icons/bs'
import ServiceImg from '../../assets/Services.png'
import OurPortfolio from './OurPortfolio'
import ComLogo from '../../assets/Logo.png'
import BtnDefault from '../Buttons/BtnDefault'

const HomePage = () => {
    const services = [
        {id: 1, name: 'Custom Software Development', img: ServiceImg},
        {id: 2, name: 'Web Development', img: HPRight},
        {id: 3, name: 'IT Consulting', img: ServiceImg},
        {id: 4, name: 'Cloud Solutions', img: HPRight},
        {id: 5, name: 'UI/UX Design', img: ServiceImg},
        {id: 6, name: 'IT Support and Maintenance', img: HPRight},        
    ]

  return (
    <div className='min-h-screen bg-purple-300/10 pt-16 px-0'>
        <div className="md:flex justify-between mb-16 px-24">
            <div className="w-full md:pt-32 md:mb-0 mb-16">
                <p className="text-gray-500 md:text-4xl font-semibold text-xl md:leading-[50px]">Unleashing the Power of Technology for Your Success with <span className='titleFont text-purple-600'>Black alpha labs</span></p>

                <p className="md:mt-8 mt-4 titleText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis asperiores tempora sunt quisquam est ullam deserunt assumenda quasi doloremque at debitis quidem, amet ea magnam, voluptate dignissimos, ex eligendi.
                    Vitae quasi nisi soluta fugiat similique, voluptates blanditiis, cupiditate error voluptatum exercitationem sapiente id esse eius praesentium, commodi suscipit sint natus. Provident quos repudiandae, eum alias reiciendis totam voluptas eveniet.
                </p>

                <div className="mt-8">
                    <BtnDefault btnTitle={"Get Started"}/>
                </div>
            </div>
            <div className="w-full md:block hidden">
                <img src={HPRight} alt="" />
            </div>
        </div>

        {/* about us */}
        <div className="pb-8 md:px-24 bg-purple-500/20">
            <div className="md:flex py-16">
                <div className="w-full">
                    <center><img src={ComLogo} alt="" className='rounded-2xl'/></center>
                    <h1 className="text-center uppercase font-bold mt-4 text-purple-800">Black alpha labs</h1>
                </div>
                <div className="w-full">
                    <h1 className="text-purple-600 text-xl font-semibold text-center">Welcome to BlackAlphaLabs</h1>
                    <p className="my-4">
                        At <span className='text-purple-600 font-semibold'>BlackAlphaLabs</span>, we are more than just a software company; we are innovators, creators, and problem-solvers dedicated to transforming ideas into reality. Founded with a passion for technology and a commitment to excellence, we strive to deliver cutting-edge solutions that empower businesses to thrive in the digital age.
                    </p>
                    <BtnDefault btnTitle={"About Us"} />
                </div>
            </div>

        </div>

        {/* end about us */}


        <div className="pb-8 md:px-24 py-16">
            <h1 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 ">Our Services</h1>

            <div className="md:grid grid-cols-3 gap-4 my-4">
                {
                    services.map((service, index) => {
                        return (
                            <div key={index} className="w-full py-4 px-6 bg-purple-500/20 duration-500 rounded-xl hover:shadow-xl mb-8">
                                <center><img src={service.img} alt="" className='h-40 w-auto'/></center>
                                <h1 className="text-center text-purple-600 font-semibold text-2xl">{service.name}</h1>
                            </div>
                        )
                    })
                }
            </div>

            <div className="">
                <center>
                    <a href="">
                        <div className="mt-8">
                            <button className='bg-purple-600 text-white py-4 px-16 rounded-full duration-500 hover:bg-purple-700'>Get Started</button>
                        </div>
                    </a>
                </center>
            </div>
        </div>  

        
        <div className="pb-8 md:px-24 bg-purple-500/20">
            <OurPortfolio />
        </div>  

        
    </div>
  )
}

export default HomePage
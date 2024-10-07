import React from 'react'
import ServiceImg from '../../assets/Service.png'
import BtnDefault from '../../components/Buttons/BtnDefault'
import ServiceData from './ServiceData'

const Service = () => {
  return (
    <div className='min-h-screen bg-white md:pt-2 pt-24 px-0'>
        <div className="md:flex justify-between mb-16 md:px-24 px-6 min-h-screen">
            <div className="w-full md:pt-32 md:mb-0 mb-16">
                <h1 className="text-gray-500 md:text-4xl font-semibold text-xl md:leading-[50px]">Services at <span className='text-purple-800'>BlackAlphaLabs</span></h1>
                <p className="md:mt-8 mt-4 titleText">
                    At BlackAlphaLabs, we specialize in delivering cutting-edge technology solutions tailored to your unique business needs. Explore our range of services below to see how we can help drive your success.
                </p>

                <div className="mt-8">
                    <a href="#CurrentCareer">
                        <BtnDefault btnTitle={"View Careers"}/>
                    </a>
                </div>
            </div>
            <div className="w-full md:block hidden mt-20">
                <img src={ServiceImg} alt="" />
            </div>
        </div>

        <div className="pb-16 md:px-24 px-8 bg-white">
            <ServiceData />
        </div>  
    </div>
  )
}

export default Service
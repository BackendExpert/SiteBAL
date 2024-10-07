import React from 'react'
import CareerImg from '../../assets/InterView.png'
import BtnDefault from '../../components/Buttons/BtnDefault'
import WhyUs from './WhyUs'
import CurrentCareers from './CurrentCareers'
import HowApply from './HowApply'
import LifeAt from './LifeAt'


const Careers = () => {
  return (
    <div className='min-h-screen bg-white md:pt-2 pt-24 px-0'>
        <div className="md:flex justify-between mb-16 md:px-24 px-6">
            <div className="w-full md:pt-32 md:mb-0 mb-16">
                <h1 className="text-gray-500 md:text-4xl font-semibold text-xl md:leading-[50px]">Join the Team at <span className='text-purple-800'>BlackAlphaLabs</span></h1>
                <p className="md:mt-8 mt-4 titleText">
                    At BlackAlphaLabs, we are driven by a passion for technology and innovation. We’re always looking for talented, motivated, and creative individuals to join our growing team. If you’re ready to take your career to the next level and be part of a dynamic and forward-thinking company, we want to hear from you!
                </p>

                <div className="mt-8">
                    <a href="#CurrentCareer">
                        <BtnDefault btnTitle={"View Careers"}/>
                    </a>
                </div>
            </div>
            <div className="w-full md:block hidden mt-20">
                <img src={CareerImg} alt="" />
            </div>
        </div>

        {/* <div className="pb-8 md:px-24 px-8 bg-purple-500/20">
            <WhyUs />
        </div> */}

        <div className="pb-16 md:px-24 px-8 bg-white">
            <WhyUs />
        </div>  

        <div className="pb-16 md:px-24 px-8 bg-white" id='CurrentCareer'>
            <CurrentCareers />
        </div> 

        <div className="pb-16 md:px-24 px-8 bg-white">
            <HowApply />
        </div>   
        <div className="pb-16 md:px-24 px-8 bg-white">
            <LifeAt />
        </div>   
    </div>


  )
}

export default Careers
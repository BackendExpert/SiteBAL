import React from 'react'
import { BsDot } from 'react-icons/bs'
import YusImg from '../../assets/yus.png' 
import AppltImg from '../../assets/ApplyImg.png'

const HowApply = () => {
  return (
    <div>
        <div className="md:flex py-8">
            <div className="w-full ml-4">
                <h1 className="text-xl text-purple-800 font-semibold">How to Apply</h1>
                <div className="my-8">
                    <p className="">
                    To apply for any of the positions, please send your CV, cover letter, and portfolio (if applicable) to careers@blackalphalabs.com. In your email, mention the job title in the subject line. We’ll get back to you as soon as possible.
                    </p>
                    
                </div>
            </div>
            <div className="w-full mr-4 md:block hidden">
                <center><img src={AppltImg} alt="" className='h-80 w-auto'/></center>
            </div>
        </div>
    </div>
  )
}

export default HowApply
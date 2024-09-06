import React from 'react'
import YusImg from '../../assets/yus.png' 
import { BsDot } from 'react-icons/bs'

const WhyUs = () => {
  return (
    <div>
        <div className="md:flex py-8">
            <div className="w-full mr-4">
                <img src={YusImg} alt="" className='h-80 w-auto'/>
            </div>
            <div className="w-full ml-4">
                <h1 className="text-xl text-purple-800 font-semibold">Why Work With Us?</h1>
                <div className="my-8">
                    <div className="flex my-2">
                        <BsDot className='h-10 w-auto text-purple-800 '/>
                        <p className="text-gray-600"><span className='text-purple-800 font-semibold'>Innovative Projects:</span> Be a part of cutting-edge projects that push the boundaries of technology.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-10 w-auto text-purple-800 '/>
                        <p className="text-gray-600"><span className='text-purple-800 font-semibold'>Career Growth:</span> We support continuous learning and professional development to help you reach your career goals.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-10 w-auto text-purple-800 '/>
                        <p className="text-gray-600"><span className='text-purple-800 font-semibold'>Collaborative Environment:</span> Work with a team of talented professionals who thrive on solving challenges together.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-10 w-auto text-purple-800 '/>
                        <p className="text-gray-600"><span className='text-purple-800 font-semibold'>Flexible Work Culture:</span> We believe in a healthy work-life balance and offer flexibility to our employees.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-10 w-auto text-purple-800 '/>
                        <p className="text-gray-600"><span className='text-purple-800 font-semibold'>Diverse Opportunities:</span> From software development to design and project management, we offer diverse career paths.</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs
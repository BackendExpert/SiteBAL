import React from 'react'
import LifeAtImg from '../../assets/LifeatImg.png'

const LifeAt = () => {
  return (
    <div>
        <div className="md:flex py-8">
            <div className="w-full mr-4 md:block hidden">
                <center><img src={LifeAtImg} alt="" className='h-80 w-auto'/></center>
            </div>
            <div className="w-full ml-4">
                <h1 className="text-xl text-purple-800 font-semibold">Life at BlackAlphaLabs</h1>
                <div className="my-8">
                    <p className="">
                        At BlackAlphaLabs, we believe in fostering a work culture that encourages creativity, collaboration, and growth. Our team enjoys working in an environment where ideas are valued, and everyone contributes to the success of our projects.
                    </p>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default LifeAt
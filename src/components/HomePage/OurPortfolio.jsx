import React from 'react'
import ServiceImg from '../../assets/Services.png'

const OurPortfolio = () => {
    const Project = [
        {
            id: 1, 
            name: 'Smart Retail E-Commerce Platform', 
            img:ServiceImg,
            client: 'AlphaMart',
            Industry: 'Retail',
            ProjectOverview: '',
            Solution: '',
            Results: '' 
        },
        {
            id: 2, 
            name: 'FinTech Mobile App for Payments', 
            img:ServiceImg,
            client: 'PaySwift',
            Industry: 'Finance',
            ProjectOverview: '',
            Solution: '',
            Results: '' 
        },
        {
            id: 3, 
            name: 'Digital Transformation for Healthcare Provider', 
            img:ServiceImg,
            client: 'HealthCarePlus',
            Industry: 'Healthcare',
            ProjectOverview: '',
            Solution: '',
            Results: '' 
        },
        {
            id: 4, 
            name: 'Educational Learning Management System (LMS)', 
            img:ServiceImg,
            client: 'EduWorld',
            Industry: 'Education',
            ProjectOverview: '',
            Solution: '',
            Results: '' 
        },
    ]
  return (
    <div className="pt-16">
        <h1 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 ">Our Services</h1>

        <div className="md:grid grid-cols-3 gap-4 my-4">

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

  )
}

export default OurPortfolio
import React from 'react'
import ServiceImg from '../../assets/Services.png'

const OurPortfolio = () => {
    const Projects = [
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
        <h1 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 ">Our Portfolio</h1>

        <div className="">
            <div className="md:grid grid-cols-4 gap-4 mt-16">
                {
                    Projects.map((project, index) => {
                        return (
                            <div className="bg-white p-4 rounded duration-500 hover:shadow-xl md:my-0 my-4" key={index}>
                                <center><img src={project.img} alt="" className='h-40 w-auto'/></center>
                                <h1 className="text-center text-purple-500 font-bold">{project.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <center>
                <a href="">
                    <div className="mt-8">
                        <button className='bg-purple-600 text-white py-4 px-16 rounded-full duration-500 hover:bg-purple-700'>View Our Projects</button>
                    </div>
                </a>
            </center>
        </div>
    </div>  

  )
}

export default OurPortfolio
import React from 'react'
import Project from '../../assets/Project.png'
import BtnDefault from '../../components/Buttons/BtnDefault'
import OnGoingProjects from './OnGoingProjects'
import CompletedProjects from './CompletedProjects'


const Projects = () => {
  return (
    <div className='min-h-screen bg-white md:pt-2 pt-24 px-0'>
        <div className="md:flex justify-between mb-16 md:px-24 px-6">
            <div className="w-full md:pt-32 md:mb-0 mb-16">
                <h1 className="text-gray-500 md:text-4xl font-semibold text-xl md:leading-[50px]">Projects at <br /> <span className='text-purple-800'>BlackAlphaLabs</span></h1>
                <p className="md:mt-8 mt-4 titleText">
                    At BlackAlphaLabs, we are driven by a passion for technology and innovation. We’re always looking for talented, motivated, and creative individuals to join our growing team. If you’re ready to take your career to the next level and be part of a dynamic and forward-thinking company, we want to hear from you!
                </p>

                <div className="mt-8">
                    <a href="#CurrentCareer">
                        <BtnDefault btnTitle={"View Projects"}/>
                    </a>
                </div>
            </div>
            <div className="w-full md:block hidden mt-20">
                <img src={Project} alt="" />
            </div>
        </div>

        <div className="">
            <OnGoingProjects />
        </div>
        {/* <div className="">
            <CompletedProjects />
        </div> */}
    </div>
  )
}

export default Projects
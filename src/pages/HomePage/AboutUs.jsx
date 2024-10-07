import React from 'react'

const AboutUs = () => {
  return (
    <div className="pb-8  bg-purple-500/20 md:px-24 py-20">
    <h1 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 ">About Us</h1>
    <div className="md:flex mt-20">
        <div className="rounded-xl md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl">
            <h1 className="text-purple-600 text-xl font-semibold text-center">Welcome to BlackAlphaLabs</h1>
            <p className="my-4">
                At <span className='text-purple-600 font-semibold'>BlackAlphaLabs</span>, we are more than just a software company; we are innovators, creators, and problem-solvers dedicated to transforming ideas into reality. Founded with a passion for technology and a commitment to excellence, we strive to deliver cutting-edge solutions that empower businesses to thrive in the digital age.
            </p>
        </div>
        <div className="rounded-xl md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl">
            <h1 className="text-purple-600 text-xl font-semibold text-center">Our Story</h1>
            <p className="my-4">
                <span className='text-purple-600 font-semibold'>BlackAlphaLabs</span> was born out of a desire to create a company that not only excels in technology but also makes a meaningful impact. Our founders, with years of experience in the software industry, recognized the growing need for custom solutions that address specific business challenges. What started as a small team of passionate developers has grown into a full-fledged software company, serving clients across various industries.
            </p>
        </div>
    </div>

    <div className="md:flex my-8">
        <div className="rounded-xl md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl">
            <h1 className="text-purple-600 text-xl font-semibold text-center">Our Values</h1>
            <div className="">
                <p className="flex py-2">
                    <p className="mt-1"><span className='text-purple-600 font-semibold'>Innovation:</span> We are constantly exploring new technologies and methodologies to stay ahead of the curve.</p>
                </p>
                <p className="flex py-2">
                    <p className="mt-1"><span className='text-purple-600 font-semibold'>Integrity:</span> We believe in honesty, transparency, and building long-lasting relationships based on trust.</p>
                </p>
                <p className="flex py-2">
                    <p className="mt-1"><span className='text-purple-600 font-semibold'>Customer-Centricity:</span> Our clients are at the heart of everything we do. We are committed to understanding their needs and exceeding their expectations.</p>
                </p>
                <p className="flex py-2">
                    <p className="mt-1"><span className='text-purple-600 font-semibold'>Excellence:</span> We take pride in delivering high-quality solutions that drive real results.</p>
                </p>
            </div>
        </div>
        <div className="rounded-xl md:my-0 my-4 w-full md:mr-4 bg-white py-4 px-6 duration-500 hover:shadow-2xl">
            <h1 className="text-purple-600 text-xl font-semibold text-center">Why Choose Us?</h1>
            <div className="">
                <p className="flex py-2">
                    <p className="mt-1"><span className='text-purple-600 font-semibold'>Expert Team:</span> Our team of skilled developers, designers, and strategists bring a wealth of knowledge and experience to every project.</p>
                </p>
                <p className="flex py-2">
                    <p className="mt-1"><span className='text-purple-600 font-semibold'>Tailored Solutions:</span> We understand that no two businesses are the same. That’s why we offer customized solutions that align with your goals.</p>
                </p>
                <p className="flex py-2">
                    <p className="mt-1"><span className='text-purple-600 font-semibold'>Proven Track Record:</span> We have successfully delivered numerous projects that have helped our clients achieve their business objectives.</p>
                </p>
            </div>
        </div>
    </div>
</div>      

  )
}

export default AboutUs
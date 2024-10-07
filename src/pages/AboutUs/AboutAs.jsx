import React from 'react'
import BtnDefault from '../../components/Buttons/BtnDefault'
import AboutUsImg from '../../assets/AboutUs.png'
import { BsDot } from 'react-icons/bs'

const AboutAs = () => {
  return (
    <div className='min-h-screen bg-white md:pt-2 pt-24 px-0'>
        <div className="md:flex justify-between md:mb-16 md:px-24 px-6">
            <div className="w-full md:pt-40 md:mb-0 mb-16">
                <h1 className="text-gray-500 md:text-4xl font-semibold text-xl md:leading-[50px]"><span className='text-purple-800'>About Us</span></h1>
                <p className="md:mt-8 mt-4 titleText">
                    BlackAlphaLabs is a leading software development company dedicated to delivering innovative and customized technology solutions. With a passion for excellence and a commitment to client satisfaction, we specialize in helping businesses of all sizes leverage the power of technology to achieve their goals.
                </p>

            </div>
            <div className="w-full md:block hidden mt-20">
                <img src={AboutUsImg} alt="" />
            </div>
        </div>


        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Our Mission</h1>
            <p className="text-gray-500 mt-4">
            Our mission is to empower businesses through technology, enabling them to streamline operations, enhance user experiences, and stay ahead in a competitive market. We believe in building partnerships with our clients, providing solutions that not only meet their needs today but also prepare them for future challenges.
            </p>
        </div>


        <div className="pb-16 md:px-24 px-8 bg-white">
            <h1 className="font-semibold text-2xl text-purple-500 text-center">Our Values</h1>
            <p className="text-gray-500 mt-4">
                At the core of our company are the values that drive us every day:
            </p>

            <div className='mt-4'>
                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Innovation: </p>
                    <p className="pl-4">We constantly seek new ways to solve problems and improve our clients’ operations.</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Quality: </p>
                    <p className="pl-4">We are committed to delivering high-quality solutions that exceed client expectations.</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Integrity: </p>
                    <p className="pl-4">We believe in transparent communication, honesty, and delivering on our promises.</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Customer-Centricity: </p>
                    <p className="pl-4">Our clients’ success is our success. We tailor our approach to meet their unique needs and goals.</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold w-auto">Continuous-Learning: </p>
                    <p className="pl-4">Technology is always evolving, and so are we. We invest in continuous learning to stay ahead of industry trends and deliver the best solutions.</p>
                </div>
            </div>
        </div>

        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Our Story</h1>
            <p className="text-gray-500 mt-4">
                Founded in 2024, BlackAlphaLabs started as a small team of passionate developers with a shared vision of using technology to make a difference. Over the years, we’ve grown into a full-service technology partner for businesses across various industries. From custom software development to cloud solutions, our team has built a reputation for delivering exceptional results and building lasting relationships.
            </p>
        </div>


        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Meet Our Team</h1>
            <p className="text-gray-500 mt-4">
            Behind every successful project is a team of talented professionals. Our team consists of experienced software developers, creative UI/UX designers, strategic IT consultants, and dedicated support staff who work together to bring your ideas to life.
            </p>
        </div>


        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Our Approach</h1>
            <p className="text-gray-500 mt-4">
            We take a collaborative approach to every project. From the initial consultation to final deployment, we work closely with our clients to ensure that every solution is tailor-made to meet their specific needs. Our development process is designed to be transparent and efficient, with regular updates and open communication every step of the way.
            </p>
        </div>


        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Why Choose Us?</h1>
            <p className="text-gray-500 mt-4">
            When you partner with BlackAlphaLabs, you’re choosing a company that values your success as much as you do. We bring:
            </p>

            <div className='mt-4'>
                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Proven Expertise: </p>
                    <p className="pl-4">With years of experience, we’ve successfully delivered solutions across various industries.</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">End-to-End Solutions: </p>
                    <p className="pl-4">From planning and design to development and maintenance, we’re with you every step of the way.</p>
                </div>


                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Cutting-Edge Technology: </p>
                    <p className="pl-4">We use the latest technologies to build solutions that are scalable, secure, and ready for the future.</p>
                </div>


                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Commitment to Support: </p>
                    <p className="pl-4">Our relationship doesn’t end at deployment. We offer ongoing support to ensure your systems run smoothly.</p>
                </div>
            </div>
        </div>

        
        <div className="pb-16 md:px-24 px-8 bg-white text-center">
            <h1 className="font-semibold text-2xl text-purple-500">Industries We Serve</h1>
            <p className="text-gray-500 mt-4">
            We take a collaborative approach to every project. From the initial consultation to final deployment, we work closely with our clients to ensure that every solution is tailor-made to meet their specific needs. Our development process is designed to be transparent and efficient, with regular updates and open communication every step of the way.
            </p>

            <div className='mt-4'>
                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Healthcare</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Finance</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Retail</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Education</p>
                </div>

                <div className="flex my-4">
                    <BsDot className='h-6 w-auto text-purple-800'/>
                    <p className="text-purple-800 font-semibold">Logistics</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutAs
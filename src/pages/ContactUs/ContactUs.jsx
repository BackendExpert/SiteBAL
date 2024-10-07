import React from 'react'
import ContactUsImg from '../../assets/ContactUs.png'
import BtnDefault from '../../components/Buttons/BtnDefault'


const ContactUs = () => {
  return (
    <div className='min-h-screen bg-white md:pt-2 pt-24 px-0'>
        <div className="md:flex justify-between mb-16 md:px-24 px-6 md:min-h-screen">
            <div className="w-full md:pt-52 md:mb-0 mb-16">
                <h1 className="text-gray-500 md:text-4xl font-semibold text-xl md:leading-[50px]">Contact <span className='text-purple-800'>BlackAlphaLabs</span></h1>
                <p className="md:mt-8 mt-4 titleText">
                We’d love to hear from you! Whether you have questions about our services, need a custom quote, or just want to learn more about how we can help, our team is here to assist you.
                </p>

            </div>
            <div className="w-full md:block hidden mt-40">
                <img src={ContactUsImg} alt="" />
            </div>
        </div>

        <div className="pb-16 md:px-24 px-8 bg-white" id='ViewService'>
            <h1 className="font-semibold text-2xl text-purple-500">Get In Touch</h1>
            <p className="text-gray-500 mt-4">
                You can reach out to us using the form below or through any of our contact methods. We look forward to connecting with you and discussing how we can meet your technology needs.
            </p>
        </div>  



        <div className="md:grid grid-cols-2 gap-4">

            <div className="pb-16 md:px-24 px-8 bg-white" id='ViewService'>
                <h1 className="font-semibold text-2xl text-purple-500">Our Contact Details</h1>
                <p className="text-gray-500 mt-4">
                    Prefer to contact us directly? Here’s how you can reach us:
                </p>
                <div className="md:my-0 my-4">
                    <p className="my-4">
                        Email: 
                    </p>
                    <p className="my-4">
                        Phone: 
                    </p>
                    <p className="my-4">
                        Address: 
                    </p>
                </div>
            </div>


            <div className="pb-16 md:px-24 px-8 bg-white" id='ViewService'>
                <h1 className="font-semibold text-2xl text-purple-500">Business Hours</h1>
                <p className="text-gray-500 mt-4">
                Our team is available during the following hours:
                </p>
                <div className="md:my-0 my-4">
                    <p className="my-4">
                        <span className='font-semibold text-purple-500'>Monday to Friday:</span> 9:00 AM - 6:00 PM
                    </p>
                    <p className="my-4">
                        <span className='font-semibold text-purple-500'>Saturday:</span> 10:00 AM - 2:00 PM
                    </p>
                    <p className="my-4">
                        <span className='font-semibold text-purple-500'>Sunday:</span> Closed 
                    </p>
                </div>
            </div>
        </div> 

        <div className="pb-16 md:px-24 px-8 bg-white" id='ViewService'>
            <h1 className="font-semibold text-2xl text-purple-500">Connect With Us</h1>
            <p className="text-gray-500 mt-4">
            Stay updated and connected by following us on social media:
            </p>
            <div className="md:my-0 my-4">
                <p className="my-4">
                    <span className='font-semibold text-purple-500 pr-2'>LinkedIn:</span> <a href="" target='_blank'>BlackAlphaLabs</a>
                </p>
                <p className="my-4">
                    <span className='font-semibold text-purple-500 pr-2'>Twitter:</span> <a href="" target='_blank'>BlackAlphaLabs</a> 
                </p>
                <p className="my-4">
                    <span className='font-semibold text-purple-500 pr-2'>Facebook:</span> <a href="" target='_blank'>BlackAlphaLabs</a>  
                </p> 
                <p className="my-4">
                    <span className='font-semibold text-purple-500 pr-2'>Instagram:</span> <a href="" target='_blank'>BlackAlphaLabs</a>  
                </p>
                <p className="my-4">
                    <span className='font-semibold text-purple-500 pr-2'>Github:</span> <a href="" target='_blank'>BlackAlphaLabs</a>  
                </p>
                <p className="my-4">
                    <span className='font-semibold text-purple-500 pr-2'>Patreon:</span> <a href="" target='_blank'>BlackAlphaLabs</a>  
                </p>
            </div>
        </div>


    </div>
  )
}

export default ContactUs
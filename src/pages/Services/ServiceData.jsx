import React from 'react'
import { BsCloudCheck, BsLaptopFill, BsLink45Deg, BsPersonWorkspace } from 'react-icons/bs'

const ServiceData = () => {
    const OurService = [
        {
            id: 1,
            service: 'Web Development',
            serviceData: 'From single-page applications to complex web platforms, we offer full-stack web development services to bring your ideas to life. Our websites are responsive, user-friendly, and optimized for performance.',
            technology: 'HTML, CSS, JavaScript, React, NodeJS',
            Logo: <BsLaptopFill className='h-8 w-auto text-white'/>
        },
        {
            id: 2,
            service: 'IT Consulting',
            serviceData: 'Our IT consulting services help you develop a robust technology strategy. We provide insights and guidance to streamline operations, strengthen security, and optimize IT infrastructure.',
            technology: 'Microsoft Azure, AWS, Google Cloud, Cisco, Fortinet, VMware',
            Logo: <BsPersonWorkspace className='h-8 w-auto text-white'/>
        },
        {
            id: 3,
            service: 'UI/UX Design',
            serviceData: 'We design engaging and intuitive user interfaces that prioritize user satisfaction. Our design process combines creativity with user-centered principles to deliver exceptional digital experiences.',
            technology: 'Adobe XD, Figma, Sketch, InVision, Axure',
            Logo: <BsLaptopFill className='h-8 w-auto text-white'/>
        },
        {
            id: 4,
            service: 'IT Support and Maintenance',
            serviceData: 'Maintain a reliable and efficient IT environment with our support and maintenance services. We offer 24/7 technical support and proactive monitoring to ensure minimal downtime.',
            technology: 'Microsoft 365',
            Logo: <BsLaptopFill className='h-8 w-auto text-white'/>
        },
        {
            id: 5,
            service: 'API Development and Integration',
            serviceData: 'Our API services facilitate seamless data exchange between systems, improving productivity and operational efficiency. We build robust, secure, and scalable APIs to suit your business needs.',
            technology: 'REST, GraphQL',
            Logo: <BsLink45Deg className='h-8 w-auto text-white'/>
        },
        {
            id: 6,
            service: 'Cloud Solutions',
            serviceData: 'Unlock the full potential of cloud computing with our scalable and secure cloud solutions. We help you migrate to and manage cloud environments for enhanced agility and resilience.',
            technology: 'AWS, Microsoft Azure, Google Cloud',
            Logo: <BsCloudCheck className='h-8 w-auto text-white'/>
        },
    ];

    return (
        <div className="md:grid grid-cols-3 gap-8">
            {OurService.map((service) => (
                <div 
                    key={service.id} 
                    data-aos="flip-left" 
                    className="py-8 px-8 text-center bg-gray-200 mx-4 rounded-xl duration-500 hover:shadow-xl"
                >
                    <center>
                        <div className="mt-[-300px] bg-purple-500 px-4 py-4 inline-block mx-auto rounded-full">
                            {service.Logo}
                        </div>
                    </center>
                    <h1 className="font-semibold mb-4 text-purple-600">{service.service}</h1>
                    <div>
                        {service.serviceData}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceData;

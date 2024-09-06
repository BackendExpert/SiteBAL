import React from 'react'
import JobImg from '../../assets/job.png'
import BtnDefault from '../Buttons/BtnDefault'

const CurrentCareers = () => {
    const Careers = [
        {
            id: 1,
            name: 'Fullstack Developer (MERN Stack)',
            exp: [
                '3+ years of experience with the MERN stack (MongoDB, Express.js, React, Node.js)',
                'Proficiency in JavaScript and modern front-end frameworks',
                'Experience with RESTful APIs and asynchronous programming'
            ],
            Responsibilities: [
                'Develop and maintain fullstack applications using the MERN stack',
                'Build scalable and high-performance RESTful APIs with Express.js and Node.js',
                'Create responsive and interactive user interfaces with React',
                'Design and manage databases using MongoDB',
                'Collaborate with cross-functional teams to deliver high-quality software solutions',
                'Write clean, testable, and maintainable code'
            ],
            Requirements: [
                'Bachelor’s degree in Computer Science, Engineering, or a related field',
                'Strong understanding of database design and management with MongoDB',
                'Experience with version control systems such as Git',
                'Familiarity with front-end build tools and best practices',
                'Ability to troubleshoot and debug issues across the full stack',
                'Excellent communication skills and ability to work both independently and in a team'
            ]
        },
        {
            id: 2,
            name: 'UI/UX Designer',
            exp: [
                '2+ years of experience in UI/UX design',
                'Proficiency in design tools such as Sketch, Figma, or Adobe XD',
                'Experience with user research and usability testing'
            ],
            Responsibilities: [
                'Conduct user research to understand user needs and behaviors',
                'Create wireframes, mockups, and prototypes for web and mobile applications',
                'Design intuitive and visually appealing user interfaces',
                'Collaborate with developers to ensure design accuracy and functionality',
                'Analyze and optimize designs based on user feedback and analytics',
                'Stay up-to-date with design trends and best practices'
            ],
            Requirements: [
                'Bachelor’s degree in Design, Human-Computer Interaction, or a related field',
                'Strong portfolio showcasing design projects and process',
                'Excellent problem-solving and communication skills',
                'Experience with front-end technologies (e.g., HTML, CSS) is a plus',
                'Ability to work collaboratively with cross-functional teams'
            ]
        },
        {
            id: 3,
            name: 'Fullstack MERN Developer Intern',
            exp: [
                'Basic understanding of the MERN stack (MongoDB, Express.js, React, Node.js)',
                'Some experience with JavaScript, HTML, and CSS'
            ],
            Responsibilities: [
                'Assist in developing and maintaining fullstack applications using the MERN stack',
                'Work on coding tasks under the guidance of senior developers',
                'Participate in code reviews and contribute to team projects',
                'Learn and apply best practices for coding and development',
                'Help with debugging and troubleshooting issues'
            ],
            Requirements: [
                'Currently pursuing or recently completed a degree in Computer Science or a related field',
                'Basic familiarity with front-end and back-end development',
                'Eagerness to learn and improve technical skills',
                'Good problem-solving abilities and attention to detail',
                'Ability to work collaboratively in a team environment'
            ]
        },
        {
            id: 4,
            name: 'Fullstack MERN Developer Intern',
            exp: [
                'Basic understanding of the MERN stack (MongoDB, Express.js, React, Node.js)',
                'Some experience with JavaScript, HTML, and CSS'
            ],
            Responsibilities: [
                'Assist in developing and maintaining fullstack applications using the MERN stack',
                'Work on coding tasks under the guidance of senior developers',
                'Participate in code reviews and contribute to team projects',
                'Learn and apply best practices for coding and development',
                'Help with debugging and troubleshooting issues'
            ],
            Requirements: [
                'Currently pursuing or recently completed a degree in Computer Science or a related field',
                'Basic familiarity with front-end and back-end development',
                'Eagerness to learn and improve technical skills',
                'Good problem-solving abilities and attention to detail',
                'Ability to work collaboratively in a team environment'
            ]
        }

    ]
  return (
    <div>
        <div className="">
            <h1 className="text-center text-3xl font-semibold text-purple-800">Job Opening</h1>
            {
                Careers.map((job, index) => {
                    return (
                        <div className={`md:flex my-4 ${index !== Careers.length - 1 ? 'border-b border-purple-500' : ''}`}>
                            <div className="w-1/6 md:block hidden">
                                <img src={JobImg} alt="" />
                            </div>
                            <div className="w-full">
                                <h1 className="text-purple-600 font-semibold text-xl mt-2">{job.name}</h1>

                                <h1 className="mt-2 font-semibold">Requirements</h1>
                                <p className="text-gray-500">
                                    {job.Requirements.map((item, index) => (
                                        <li key={index} className="mb-2">{item}</li>
                                    ))}
                                </p>

                                <h1 className="mt-2 font-semibold">Experience</h1>
                                <p className="text-gray-500">
                                    {job.exp.map((item, index) => (
                                        <li key={index} className="mb-2">{item}</li>
                                    ))}
                                </p>

                                <h1 className="mt-2 font-semibold">Responsibilities</h1>
                                <p className="text-gray-500">
                                    {job.Responsibilities.map((item, index) => (
                                        <li key={index} className="mb-2">{item}</li>
                                    ))}
                                </p>
                            </div>
                            <div className="md:w-1/6 md:mb-0 mb-8">
                                <a href="">
                                    <BtnDefault btnTitle={"Apply Now"} />
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CurrentCareers
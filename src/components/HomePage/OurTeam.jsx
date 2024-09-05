import React from 'react'
import { BsEnvelope, BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const OurTeam = () => {
    const Team = [
        {
            id: 1,
            name: 'John Smith',
            post: 'Founder & CEO',
            bio: 'John is the visionary leader of BlackAlphaLabs, with over 15 years of experience in software development and IT strategy. His focus is on driving innovation and ensuring the company’s growth and client satisfaction. John’s passion for technology and leadership guides the team to deliver exceptional results.',
            Expertise: 'Strategic Planning, Full-Stack Development, IT Solutions',
            Social: [
                {
                    id: 1,
                    Icon: <BsLinkedin />,
                    link: ''
                },
                {
                    id: 2,
                    Icon: <BsGithub />,
                    link: ''
                },
                {
                    id: 3,
                    Icon: <BsFacebook />,
                    link: ''
                },
                {
                    id: 4,
                    Icon: <BsEnvelope />,
                    link: ''
                }
            ]

        }
    ]
  return (
    <div>OurTeam</div>
  )
}

export default OurTeam
import React from 'react'
import { BsEnvelope, BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import TeamImg from '../../assets/Team.png'

const OurTeam = () => {
    const TeamMembers = [
        {
            id: 1,
            name: 'John Smith',
            image: TeamImg,
            post: 'Founder & CEO',
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
        },

        {
            id: 2,
            name: 'John Smith',
            image: TeamImg,
            post: 'Founder & CEO',
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
        },

        {
            id: 3,
            name: 'John Smith asd',
            image: TeamImg,
            post: 'Founder & CEO',
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
        },


    ]
  return (
    <div data-aos="zoom-out-up" className="w-full mx-auto pt-16">
        <h2 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 mb-12">Meet Our Team</h2>
    
        <div className="md:grid grid-cols-3 gap-4">
            {
                TeamMembers.map((team, index) => {
                    return (
                        <div className="flex flex-col items-center md:my-0 my-8">
                            <img src={team.image} alt={team.name} className="h-40 w-auto" />

                            <h2 className="text-xl font-semibold text-purple-800 mt-8">{team.name}</h2>
                            <p className="text-gray-600">{team.post}</p>
                            <div className="flex justify-center mt-4">
                                {team.Social.map((social) => (
                                    <a
                                        key={social.id}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-purple-500 mx-2"
                                    >
                                        {social.Icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default OurTeam
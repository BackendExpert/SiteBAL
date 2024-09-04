import React from 'react'
import Logo from '../../assets/Logo.png'
import { BsList } from 'react-icons/bs'

const NavBar = () => {
    const navData = [
        {id: 1, name: 'Home', link: ''},
        {id: 2, name: 'About Us', link: ''},
        {id: 3, name: 'Services', link: ''},
        {id: 4, name: 'Portfolio', link: ''},
        {id: 5, name: 'Blog', link: ''},
        {id: 6, name: 'Careers', link: ''},
        {id: 7, name: 'Contact Us', link: ''},
    ]
  return (
    <div className='h-auto py-4 px-6 bg-white  shadow-md text-purple-900'>
        <div className="md:flex justify-between ml-4">
            <div className="">
                <h1 className="">BLACK ALPHA LABS</h1>
            </div>

            <div className="md:hiddem block">
                <BsList />
            </div>

            <div className="md:flex md:block hidden">
                {
                    navData.map((data, index) => {
                        return (
                            <div className="mx-4" key={index}>
                                <a href={data.link}>
                                    {data.name}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default NavBar
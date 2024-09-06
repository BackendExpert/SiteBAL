import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { BsList } from 'react-icons/bs';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navData = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About Us', link: '' },
        { id: 3, name: 'Services', link: '' },
        { id: 4, name: 'Portfolio', link: '' },
        { id: 5, name: 'Blog', link: '' },
        { id: 6, name: 'Careers', link: 'Careers' },
        { id: 7, name: 'Contact Us', link: '' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='h-auto py-4 px-6 bg-white shadow-md text-purple-900'>
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="text-lg font-bold">BLACK ALPHA LABS</h1>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <BsList size={24} />
                    </button>
                </div>

                <div className="hidden md:flex space-x-6">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block duration-500 hover:underline font-bold">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'translate-y-14' : '-translate-y-full'
                } md:hidden`}
            >
                <div className="py-4">
                    {navData.map((data) => (
                        <a href={data.link} key={data.id} className="block py-2 px-4 border-b border-gray-200">
                            {data.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;

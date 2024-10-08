import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer class="pb-8 md:px-24 px-8 bg-purple-500/20 py-10 text-purple-500">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        

        <div>
          <h4 class="font-bold text-lg mb-4 text-purple-800">BlackAlphaLabs</h4>
          <p>We are an innovative software development company delivering cutting-edge solutions to businesses worldwide.</p>
          <p class="mt-4">© 2024 BlackAlphaLabs. All rights reserved.</p>
        </div>
        

        <div>
          <h4 class="font-bold text-lg mb-4 text-purple-800">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#about" class="hover:text-gray-400">About Us</a></li>
            <li><a href="#services" class="hover:text-gray-400">Services</a></li>
            <li><a href="#portfolio" class="hover:text-gray-400">Portfolio</a></li>
            <li><a href="#contact" class="hover:text-gray-400">Contact</a></li>
            <li><a href="#careers" class="hover:text-gray-400">Careers</a></li>
          </ul>
        </div>
        

        <div>
          <h4 class="font-bold text-lg mb-4 text-purple-800">Our Services</h4>
          <ul class="space-y-2">
            <li><a href="#custom-software" class="hover:text-gray-400">Custom Software Development</a></li>
            <li><a href="#web-development" class="hover:text-gray-400">Web Development</a></li>
            <li><a href="#cloud-solutions" class="hover:text-gray-400">Cloud Solutions</a></li>
            <li><a href="#it-consulting" class="hover:text-gray-400">IT Consulting</a></li>
            <li><a href="#ui-ux-design" class="hover:text-gray-400">UI/UX Design</a></li>
          </ul>
        </div>
        

        <div>
          <h4 class="font-bold text-lg mb-4 text-purple-800">Contact Us</h4>
          <p><strong>Email:</strong> info@blackalphalabs.com</p>
          <p><strong>Phone:</strong> +94 123 456 789</p>
          <p><strong>Address:</strong> 1234 Main St, Colombo, Sri Lanka</p>
          <div class="mt-4 flex space-x-4">
            <a href=""><BsLinkedin className='h-6 w-auto duration-500 hover:text-purple-600 hover:shadow-xl'/></a>
            <a href=""><BsTwitterX className='h-6 w-auto duration-500 hover:text-purple-600 hover:shadow-xl'/></a>
            <a href=""><BsFacebook className='h-6 w-auto duration-500 hover:text-purple-600 hover:shadow-xl'/></a>
            <a href=""><BsGithub className='h-6 w-auto duration-500 hover:text-purple-600 hover:shadow-xl'/></a>
          </div>
        </div>
    
      </div>
      

      <div class="mt-8 border-t border-purple-700 pt-4 text-center">
        <p>Designed & Developed by <span className='font-semibold text-purple-800'>BlackAlphaLabs</span></p>
      </div>
    </footer>
  
  )
}

export default Footer
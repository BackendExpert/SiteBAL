import React, { useState } from 'react'


const UserSay = () => {

    const testimonials = [
        {
          client: "AlphaMart – Retail E-Commerce Platform",
          quote: "Working with BlackAlphaLabs was a game-changer for our business. They developed a custom e-commerce solution that not only improved our online sales but also streamlined our operations. Their team was professional, knowledgeable, and always ready to go the extra mile. We highly recommend them!",
          author: "— Jane Doe, CEO, AlphaMart"
        },
        {
          client: "PaySwift – FinTech Mobile App",
          quote: "BlackAlphaLabs delivered an amazing mobile app that exceeded our expectations. The user interface is sleek, and the functionality is top-notch. Our users love the app, and we’ve seen a significant increase in customer satisfaction.",
          author: "— John Roberts, CTO, PaySwift"
        },
        {
          client: "HealthCarePlus – Healthcare Digital Transformation",
          quote: "We approached BlackAlphaLabs to digitize our patient records and implement a telemedicine platform. The platform they built has drastically improved our patient care and operational efficiency.",
          author: "— Dr. Emily Watson, Medical Director, HealthCarePlus"
        },
        {
          client: "EduWorld – Educational LMS",
          quote: "The Learning Management System developed by BlackAlphaLabs has transformed the way we deliver education. Their commitment to quality and customer service has been outstanding.",
          author: "— Michael Evans, Head of Technology, EduWorld"
        }
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [fade, setFade] = useState(true);
    
      const handleDotClick = (index) => {
        if (index === currentIndex) return; // If the same dot is clicked, do nothing
        setFade(false); // Start fade-out effect
        setTimeout(() => {
          setCurrentIndex(index); // Change the testimonial after fade-out
          setFade(true); // Trigger fade-in effect
        }, 500); // Matches the fade-out duration
      };
    

  return (
    <div data-aos="zoom-in" className="w-full mx-auto pt-16">
      <h2 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 mb-12">What Our Clients Say</h2>
      
      {/* Testimonial */}
      <div className="w-full mx-auto">
        <div 
          className={`p-6 bg-purple-500/20 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          <h3 className="font-semibold mb-2">{testimonials[currentIndex].client}</h3>
          <p className="text-gray-700">{testimonials[currentIndex].quote}</p>
          <p className="text-gray-500 mt-4">{testimonials[currentIndex].author}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default UserSay
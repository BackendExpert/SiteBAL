import React from 'react'
import HPRight from '../../assets/HomePageRight.png'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-purple-300/10 pt-20 px-6'>
        <div className="md:flex justify-between">
            <div className="w-full md:pt-40 md:mb-0 mb-16">
                <p className="text-gray-500 md:text-5xl text-3xl md:leading-[60px] titleFont">Unleashing the Power of Technology for Your Success with <span className='titleFont text-purple-600'>Black alpha labs</span></p>

                <p className="md:mt-24 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis asperiores tempora sunt quisquam est ullam deserunt assumenda quasi doloremque at debitis quidem, amet ea magnam, voluptate dignissimos, ex eligendi.
                    Vitae quasi nisi soluta fugiat similique, voluptates blanditiis, cupiditate error voluptatum exercitationem sapiente id esse eius praesentium, commodi suscipit sint natus. Provident quos repudiandae, eum alias reiciendis totam voluptas eveniet.
                </p>

                <div className="mt-8">
                    <button className='bg-purple-500 text-white py-4 px-16 rounded-full duration-500 hover:bg-purple-600'>Get Started</button>
                </div>
            </div>
            <div className="w-full md:block hidden">
                <img src={HPRight} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HomePage
import React from 'react'
import CareerImg from '../../assets/InterView.png'
import BtnDefault from '../Buttons/BtnDefault'


const Careers = () => {
  return (
    <div>
        <div className="md:flex justify-between mb-16 md:px-24 px-6">
            <div className="w-full md:pt-32 md:mb-0 mb-16">

                <p className="md:mt-8 mt-4 titleText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis asperiores tempora sunt quisquam est ullam deserunt assumenda quasi doloremque at debitis quidem, amet ea magnam, voluptate dignissimos, ex eligendi.
                    Vitae quasi nisi soluta fugiat similique, voluptates blanditiis, cupiditate error voluptatum exercitationem sapiente id esse eius praesentium, commodi suscipit sint natus. Provident quos repudiandae, eum alias reiciendis totam voluptas eveniet.
                </p>

                <div className="mt-8">
                    <BtnDefault btnTitle={"Get Started"}/>
                </div>
            </div>
            <div className="w-full md:block hidden">
                <img src={CareerImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Careers
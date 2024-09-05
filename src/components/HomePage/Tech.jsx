import React from 'react'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/nodejs.png'
import mysql from '../../assets/mysql.png'
import mongo from '../../assets/mongodb.png'
import vite from '../../assets/vite.png'


const Tech = () => {
  return (
    <div data-aos="zoom-in" className="w-full mx-auto pt-16">
      <h2 className="text-center text-4xl text-gray-500 font-semibold text-purple-600 mb-12">Our Technology Stack</h2>
    
        <div className="">
            <div className="grid md:grid-cols-8 grid-cols-4 gap-4">
                <div className="p-2">
                    <img src={html} alt="" />
                </div>
                <div className="p-2">
                    <img src={css} alt="" />
                </div>
                <div className="p-2">
                    <img src={sass} alt="" />
                </div>
                <div className="p-2">
                    <img src={js} alt="" />
                </div>
                <div className="p-2">
                    <img src={react} alt="" />
                </div>
                <div className="p-2">
                    <img src={node} alt="" />
                </div>
                <div className="p-2">
                    <img src={vite} alt="" />
                </div>
                <div className="p-2">
                    <img src={mysql} alt="" />
                </div>
                <div className="p-2">
                    <img src={mongo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech
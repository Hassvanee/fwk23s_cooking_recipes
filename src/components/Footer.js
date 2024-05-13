import React from "react";
import {FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#67676a]">
            <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="w-full text-3xl font-bold">What's <span className=" text-orange-500">cooking</span></h1>
                <p>© 2024 Hassvanee Samaae</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaGithubSquare size={30}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
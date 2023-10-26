import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4x1 text3x1 mb-4 font-medium text-white">
                        Hi, I'm Gio.
                        <br className="hidden lg:inline-block" /> I love to build amazing webpages.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    A freshly minted Full Stack Web Developer with a passion for crafting seamless, user-centric digital experiences. 
                    Armed with a solid foundation in front-end technologies like HTML5, CSS3, JavaScript and ReactJS, coupled with a proficiency in back-end frameworks like Node.js and Express.js, I bring a holistic approach to web development. 
                    My keen eye for design and unwavering commitment to clean, efficient code ensure that every project I undertake is not only functional but also aesthetically pleasing. 
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                            </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    )
}
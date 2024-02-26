import React from "react";
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import Slideshow from "../Components/Slide";
import {Helmet} from "react-helmet-async";
import aboutMe from "./AboutMe";









export default function App() {

    return <body className="w-screen h-screen bg-gradient-to-bl from-slate-800 to-amber-100">
        <Helmet>
            <title>Home</title>
            <meta name="description" content="Home Page" />
            <link rel="canonical" href="/App" />
        </Helmet>
            <motion.nav initial={{opacity: 0}}
                        style={{border: 1}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, ease: "easeIn"}}
                        className="flex items-center justify-between
                    bg-fixed border-6 flex-wrap border-black bg-slate-800 p-6 m-auto w-screen op fixed">
                <a href="Start.jsx" className="text-4xl text-amber-100 font-serif size-auto flex-auto">Ewan
                    Buchanan</a>
                <ul className=" font-serif bg fixed right-4 items-center px-4 text-3xl space-x-6">
                    <a href={aboutMe} className="">
                        <button className="hover:text-amber-300 fill-transparent text-amber-100">About Me</button>
                    </a>
                    <a href="PreviousProjects.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Previous
                        Projects</a>
                    <a href="Resume.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Resume</a>
                    <a href="Socials.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Socials</a>
                    <a href="ContactMe.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Contact
                        Me</a>
                </ul>
            </motion.nav>
        <motion.div
            initial={{opacity: 0}}
            style={{border: 1}}
            animate={{opacity: 1}}
            transition={{duration: 2, ease: "easeIn"}}>>
        <div>
            <TypeAnimation
                sequence={["I'm Ewan Buchanan", 2547, //2995
                    "I'm a Developer", 2707, //2200
                    "I'm a Computer Science Student", 2000, //4040
                    "I'm a Problem Solver", 2534, //2640
                    "I'm a Leader", 2800, //1560
                    "I'm a Life Long Learner", 2400]} //3855
                wrapper="h2"
                speed={60}
                deletionSpeed={80}
                style={{fontSize: "5rem", color: "black", textAlign: "center", fontFamily: "serif"}}
                repeat={Infinity}
                className="absolute top-20 inset-0"/>
        </div>
        <div className="container inset-0 left-[50%]">
            <Slideshow className="absolute inset-0 w-screen"/>
        </div>
        </motion.div>
        </body>

}



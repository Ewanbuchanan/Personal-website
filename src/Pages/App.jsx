import React from "react";
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import Slideshow from "../Components/Slide";
import {Helmet} from "react-helmet-async";
import NaviBar from "../Components/NaviBar";









export default function App() {
    return <body className="w-screen h-screen bg-gradient-to-bl from-slate-800 to-amber-100">
        <Helmet>
            <title>Home</title>
            <meta name="description" content="Home Page" />
            <link rel="canonical" href="/App" />
        </Helmet>
        <h1 className="hidden">App Main Page Ewan Buchanan</h1>
            <NaviBar />
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



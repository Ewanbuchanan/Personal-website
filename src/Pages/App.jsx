import React from "react";
import {motion} from "framer-motion";
import {TypeAnimation} from "react-type-animation";
import {Helmet} from "react-helmet-async";
import NaviBar from "../Components/NaviBar";
import programmer from "../Photos/Software-developer.jpg";
import learner from "../Photos/IMG_1919.jpg";
import ubc from "../Photos/CS logo narrow 2020-07-29_12-16-18.jpg";
import leader from "../Photos/IMG_0125.jpg";
import ewan from "../Photos/IMG_3649.PNG";
import llearner from "../Photos/IMG_4037.jpg";
import jassy from "../Photos/instc 2023-10-04 025911.615.jpg";
import me from "../Photos/IMG_4734.jpg";
import paint from "../Photos/IMG_5264.png";
import Slideshow from "../Components/Slide";
import MobileNavBar from "../Components/MobileNavBar";









export default function App() {
    return <body className="w-screen h-screen bg-black">

        <Helmet>
            <title>Home</title>
            <meta name="description" content="Home Page" />
            <link rel="canonical" href="/App" />
        </Helmet>
        <h1 className="hidden">App Main Page Ewan Buchanan</h1>
        <div className="hidden xl:block">
            <NaviBar />
        </div>
        <div className="absolute xl:hidden top-50  sm:block">
            <MobileNavBar /> </div>

        <motion.div
            initial={{opacity: 0}}
            style={{border: 1}}
            animate={{opacity: 1}}
            transition={{duration: 2, ease: "easeIn"}}
            className="bg-gradient-to-b  w-full h-full from-green-950 to-black">
        <div className="h-auto w-auto top-auto">
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
                style={{color: "#74c69d", textAlign: "center", fontFamily: "serif"}}
                repeat={Infinity}
                className="absolute lg:text-8xl md:text-5xl top-20 inset-0"/>
        </div>
            <div className="visible xl:hidden w-auto h-auto"><Slideshow/></div>
            <div className="container hidden object-cover size-auto xl:block top-[30%] w-screen fixed">
                <motion.img src={programmer} title="Programmer"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 0}}
                            width={300}
                            height={200}
                            transition={{duration: 1, ease: "linear", delay: 0}}
                            className="absolute top-[30%] inset-0"></motion.img>
                <motion.img src={ewan} title="Ewan"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 290}}
                            width={362}
                            height={250}
                            transition={{duration: 1, ease: "linear", delay: 0.2}}
                            className="absolute top-[30%] inset-0"></motion.img>
                <motion.img src={learner} title="Learner"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 0}}
                            width={290}
                            height={100}
                            transition={{duration: 1, ease: "linear", delay: 0.4}}
                            className="absolute py-[180px] inset-0 top-[30%] "></motion.img>
                <motion.img src={ubc} title="UBC"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 653}}
                            width={600}
                            height={400}
                            transition={{duration: 1, ease: "linear", delay: 0.6}}
                            className="absolute object-cover inset-0 py-[422px] top-[30%] "></motion.img>
                <motion.img src={leader} title="Programmer"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 653}}
                            width={560}
                            height={400}
                            transition={{duration: 1, ease: "linear", delay: 0.8}}
                            className="absolute inset-0 overflow-clip object-contain top-[30%] "></motion.img>
                <motion.img src={llearner} title="llearner"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 1210}}
                            width={285}
                            height={400}
                            transition={{duration: 1, ease: "linear", delay: 1}}
                            className="absolute overflow-clip object-contain top-[30%] "></motion.img>
                <motion.img src={jassy} title="jassy"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 1240}}
                            width={285}
                            height={400}
                            transition={{duration: 1, ease: "linear", delay: 1}}
                            className="absolute overflow-clip py-[415px] object-contain top-[30%] "></motion.img>
                <motion.img src={me} title="me"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 1498}}
                            width={300}
                            height={400}
                            transition={{duration: 1, ease: "linear", delay: 1}}
                            className="absolute overflow-clip object-contain top-[30%] "></motion.img>
                <motion.img src={paint} title="paint"
                            initial={{opacity: 0, left: -200}}
                            animate={{opacity: 1, left: 1498}}
                            width={300}
                            height={400}
                            transition={{duration: 1, ease: "linear", delay: 1}}
                            className="absolute py-[320px] overflow-clip object-contain top-[30%] "></motion.img>

            </div>
        </motion.div>

    </body>


}



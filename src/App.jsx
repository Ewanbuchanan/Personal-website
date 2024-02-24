import React from "react";
import ReactDOM from "react-dom/client";
import {motion} from "framer-motion";
import {Outlet, Routes, Route, BrowserRouter} from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import PreviousProjects from "./PreviousProjects";
import Resume from "./resume";
import Socials from "./Socials";
import Start from "./Start";
import {TypeAnimation} from "react-type-animation";
import Slideshow from "./Slide";








function App() {
    const backGround =
        <body className="w-screen h-screen bg-gradient-to-bl from-slate-800 to-amber-100">
        <BrowserRouter>
            <Routes>
                <Route path="/App" element={<App/>}/>
                <Route path="/AboutMe" element={<AboutMe/>}/>
                <Route path="/ContactMe" element={<ContactMe/>}/>
                <Route path="/PreviousProjects" element={<PreviousProjects/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/Socials" element={<Socials/>}/>
                <Route path="/Start" element={<Start/>}/>
            </Routes>
            <motion.nav initial={{opacity: 0}}
                        style={{border: 1}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, ease: "easeIn"}}
                        className="flex items-center justify-between
                    bg-fixed border-6 flex-wrap border-black bg-slate-800 p-6 m-auto w-screen op fixed">
                <a href="Start.jsx" className="text-4xl text-amber-100 font-serif size-auto flex-auto">Ewan
                    Buchanan</a>
                <ul className=" font-serif bg fixed right-4 items-center px-4 text-3xl space-x-6">
                    <a href="AboutMe.jsx" className="">
                        <button className="hover:text-amber-300 fill-transparent text-amber-100">About Me</button>
                    </a>
                    <a href="Start.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Previous
                        Projects</a>
                    <a href="resume.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Resume</a>
                    <a href="Socials.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Socials</a>
                    <a href="ContactMe.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Contact
                        Me</a>
                </ul>
                <Outlet/>
            </motion.nav>
        </BrowserRouter>
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
                deletionSpeed={75}
                style={{fontSize: "5rem", color: "black", textAlign: "center", fontFamily: "serif"}}
                repeat={Infinity}
                className="absolute top-20 inset-0"/>
        </div>
        <div className="container inset-0 left-[50%]">
            <Slideshow className="absolute inset-0 w-screen"/>
        </div>
        </body>


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(backGround);

    return <body id="root">
    </body>
}

export default App;


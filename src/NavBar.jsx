import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import PreviousProjects from "./PreviousProjects";
import Resume from "./resume";
import Socials from "./Socials";
import Start from "./Start";
import {motion} from "framer-motion";
import React from "react";
import App from "./App";

function NavBar(){
    return <div><BrowserRouter>
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
            <Link to="AboutMe.jsx" className="">
                <button className="hover:text-amber-300 fill-transparent text-amber-100">About Me</button>
            </Link>
            <a href="Start.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Previous
                Projects</a>
            <a href="resume.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Resume</a>
            <a href="Socials.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Socials</a>
            <a href="ContactMe.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Contact
                Me</a>
        </ul>
        <Outlet/>
    </motion.nav>
</BrowserRouter></div>}

export default NavBar;
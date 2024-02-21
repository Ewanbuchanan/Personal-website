import React from "react";
import ReactDOM from "react-dom/client";
import {motion} from "framer-motion";
import {Outlet, Link, BrowserRouter, Routes, Route} from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import PreviousProjects from "./PreviousProjects";
import Resume from "./resume";
import Socials from "./Socials";
import Start from "./Start";






function App() {





    const backGround =
        <body className="w-screen h-[2000px] bg-gradient-to-bl from-slate-800 to-amber-100">
        <BrowserRouter>
            <Routes>
                <Route path="/App" element={<App />}/>
                <Route path="/AboutMe" element={<AboutMe />}/>
                <Route path="/ContactMe" element={<ContactMe />} />
                <Route path="/PreviousProjects" element={<PreviousProjects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/Socials" element={<Socials />} />
                <Route path="/Start" element={<Start />} />
            </Routes>
        <motion.nav initial={{opacity: 0}}
                    style={{border: 1 }}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: "easeIn"}}
                    className="flex items-center justify-between
                    bg-fixed flex-wrap border-opacity-0 p-6 m-auto op rounded-b fixed">
            <a href="Start.jsx" className="text-4xl text-amber-100 font-serif size-auto flex-auto">Ewan
                Buchanan</a>
            <ul className=" font-serif fixed right-4 items-center px-4 text-3xl space-x-6">
                <Link to="/AboutMe" className="hover:text-amber-300 fill-transparent text-amber-100">About Me</Link>
                 <a href="PreviousProjects.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Previous
                    Projects</a>
                <a href="resume.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Resume</a>
                <a href="Socials.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Socials</a>
                <a href="ContactMe.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Contact
                    Me</a>
            </ul>
            <Outlet />

        </motion.nav>
        </BrowserRouter>
        <div className="relative w-screen h-screen">
        <div className="absolute top-20">
            <p>I am</p>
        </div>

        <div className="absolute top-28">
            <h2>Why I want to be a programmer?</h2>
            <motion.p>I want to</motion.p>
        </div>
        </div>
        </body>


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(backGround);

    return <body id="root">
    </body>
}

export default App;


import React from "react";
import {motion} from "framer-motion";
import ReactDOM from "react-dom/client";
import {HashRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import PreviousProjects from "./PreviousProjects";
import Resume from "./resume";
import Socials from "./Socials";
import App from "./App";



function start() {
    const height = window.innerHeight
    const start =
        <body id="Meet Me">
        <HashRouter>
            <Routes>
                <Route path="/App" Component={App}/>
                <Route path="/AboutMe" element={<AboutMe/>}/>
                <Route path="/ContactMe" element={<ContactMe/>}/>
                <Route path="/PreviousProjects" element={<PreviousProjects/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/Socials" element={<Socials/>}/>
            </Routes>
            <motion.body
                initial = {{backgroundColor: "black"}}
                animate={{}}

                className="flex h-screen w-screen justify-center content-center items-center">

                <svg className="absolute inset-0 w-screen h-screen overflow-visible  z-0">

                    {Array.from({length: (height / 75)}, (_, i) => (
                        <motion.g
                            key={i}
                        >
                            {Array.from({length: height}, (_, j) => (
                                <motion.rect
                                    key={j}
                                    width={75}
                                    height={75}
                                    rx="0"
                                    stroke="#0a0f1e"
                                    x={(j + 1) * 80 - 80} // Adjust spacing as needed
                                    y={(i + 1) * 80 - 80} // Adjust spacing as needed
                                    whileHover={{stroke: "#FFF", scale: 1.1, rx: 5}}
                                />
                            ))}
                        </motion.g>
                    ))}
                </svg>
                <div className="absolute
                 h-screen top-[50%] left-[47%] max-w-25 max-h-3.5">
                    <div className="">
                        <ul>
                <Link to="/App" className="">
                    <motion.button
                        whileHover={{scale: 1.1 }}
                        className="text-amber-100 font-bold font-serif
                     border border-amber-100 hover:bg-gradient-to-bl
                      from-green-500 to-cyan-950 text-2xl rounded-md">Meet me</motion.button>
                </Link>
                        </ul>
                        <Outlet />
                        </div>
                </div>

            </motion.body>
        </HashRouter>
        </body>


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(start);
    return <body id='root'></body>
}

export default start;
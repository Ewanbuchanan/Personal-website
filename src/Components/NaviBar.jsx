import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import React from "react";

function NaviBar(){
    return <div>
    <motion.nav initial={{opacity: 0}}
                style={{border: 1}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: "easeIn"}}
                className="flex items-center justify-between
                    bg-fixed border-6 sm:shrink-0 sm:p-1 flex-wrap border-black bg-transparent p-6 m-auto w-screen op fixed">
        <Link to="/App">
            <button className="lg:text-4xl md:2xl sm:shrink-0 hover:text-amber-300 sm:text-1xl text-[#dad7cd] font-serif  ">Ewan Buchanan</button>
        </Link>
        <div className=" font-serif bg fixed right-4 items-center px-4 lg:text-3xl sm:text-1xl space-x-6">
            <Link to="/AboutMe">
                <button className="hover:text-amber-300 fill-transparent text-[#dad7cd]">About Me</button>
            </Link>
            <Link to="/PreviousProjects">
                <button className="hover:text-amber-300 fill-transparent text-[#dad7cd]">Previous Projects</button>
            </Link>
            <Link to="/Resume">
                <button className="hover:text-amber-300 fill-transparent text-[#dad7cd]">Resume</button>
            </Link>
            <Link to="/Socials">
                <button className="hover:text-amber-300 fill-transparent text-[#dad7cd]">Socials</button>
            </Link>
            <Link to="/ContactMe">
                <button className="hover:text-amber-300 fill-transparent text-[#dad7cd]">Contact Me</button>
            </Link>
        </div>
    </motion.nav>
</div>}

export default NaviBar;
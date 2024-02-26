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
                    bg-fixed border-6 flex-wrap border-black bg-slate-800 p-6 m-auto w-screen op fixed">
        <Link to="/App">
            <button className="text-4xl hover:text-amber-300 text-amber-100 font-serif size-auto flex-auto">Ewan Buchanan</button>
        </Link>
        <div className=" font-serif bg fixed right-4 items-center px-4 text-3xl space-x-6">
            <Link to="/AboutMe">
                <button className="hover:text-amber-300 fill-transparent text-amber-100">About Me</button>
            </Link>
            <Link to="/PreviousProjects">
                <button className="hover:text-amber-300 fill-transparent text-amber-100">Previous Projects</button>
            </Link>
            <Link to="/Resume">
                <button className="hover:text-amber-300 fill-transparent text-amber-100">Resume</button>
            </Link>
            <Link to="/Socials">
                <button className="hover:text-amber-300 fill-transparent text-amber-100">Socials</button>
            </Link>
            <Link to="/ContactMe">
                <button className="hover:text-amber-300 fill-transparent text-amber-100">Contact Me</button>
            </Link>
        </div>
    </motion.nav>
</div>}

export default NaviBar;
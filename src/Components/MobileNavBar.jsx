// DropdownMenu.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <Link to="/App" className="fixed top-0 left-0 z-50">
                <button className="lg:text-9xl bg-transparent md:2xl sm:shrink-0 hover:text-amber-300 sm:text-3xl text-[#dad7cd] font-serif">Ewan Buchanan</button>
            </Link>
            <button
                className="fixed top-0 right-0 z-50 flex flex-col h-12 w-12 rounded justify-center items-center group"
                onClick={toggleMenu}
            >
                <div className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
                <div className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                <div className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 left-0 w-full h-full bg-black  z-40 flex items-center justify-center"
                        onClick={toggleMenu}
                    >
                        <ul className="text-white space-y-6 text-2xl">
                            <li><Link to="/AboutMe">
                                <button className="hover:text-amber-300 fill-transparent font-serif text-[#dad7cd]">About Me</button>
                            </Link> </li>
                            <li><Link to="/PreviousProjects">
                                <button className="hover:text-amber-300 fill-transparent font-serif text-[#dad7cd]">Previous Projects</button>
                            </Link></li>
                            <li><Link to="/Resume">
                                <button className="hover:text-amber-300 fill-transparent font-serif text-[#dad7cd]">Resume</button>
                            </Link> </li>
                           <li><Link to="/Socials">
                                <button className="hover:text-amber-300 fill-transparent font-serif text-[#dad7cd]">Socials</button>
                           </Link> </li>
                            <li><Link to="/ContactMe">
                                <button className="hover:text-amber-300 fill-transparent font-serif text-[#dad7cd]">Contact Me</button>
                            </Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DropdownMenu;


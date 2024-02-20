import React from "react";
import ReactDOM from "react-dom/client";
import {motion} from "framer-motion";
import * as ReactDOMClient from "react-dom/client";





function App() {

    const backGround =
        <body className= "w-auto h-auto bg-gradient-to-bl from-slate-800 to-amber-100">
        <motion.nav initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: "easeIn"}}
                    className="flex items-center justify-between
                    bg-fixed flex-wrap p-6">
            <a href="App.jsx" className="text-4xl text-amber-100 font-serif absolute size-auto flex-auto">Ewan
                Buchanan</a>
            <div className="absolute font-serif right-3 flex-auto items-center px-4 text-3xl space-x-6">
                <a href="AboutMe.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">About Me</a>
                <a href="PreviousProjects.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Previous
                    Projects</a>
                <a href="resume.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Resume</a>
                <a href="Socials.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Socials</a>
                <a href="ContactMe.jsx" className="hover:text-amber-300 fill-transparent text-amber-100">Contact
                    Me</a>
            </div>
        </motion.nav>
        <div></div><div>
            <h2>Who am I</h2>
            <p>I am</p>
        </div>
        <div></div><div>
            <h2>Why I want to be a programmer?</h2>
            <p>I want to</p>
        </div>
        </body>


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(backGround);

    return <body id="root">
    </body>
}

export default App;


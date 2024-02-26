import {motion} from "framer-motion";
import React from "react";
import {Helmet} from "react-helmet-async";
import NaviBar from "../Components/NaviBar";

function AboutMe(){
    return (<>
        <Helmet>
            <title>About Me</title>
            <meta name="description" content="Software Engineer" />
            <link rel="canonical" href="/AboutMe" />
        </Helmet>
        <body className="w-screen h-screen bg-gradient-to-bl from-[#344e41] to-[#dad7cd]">
        <h1 className="hidden">About Me Page Ewan Buchanan</h1>
        <NaviBar/>
        </body>
    </>);
}

export default AboutMe;
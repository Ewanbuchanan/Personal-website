
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
        <body className="w-screen h-screen bg-black">
    <NaviBar />
    </body> </>);
}

export default AboutMe;
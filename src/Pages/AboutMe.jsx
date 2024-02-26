
import React from "react";
import {Navbar} from "flowbite-react";
import {Helmet} from "react-helmet-async";

function AboutMe(){
    return (<>
        <Helmet>
            <title>About Me</title>
            <meta name="description" content="Software Engineer" />
            <link rel="canonical" href="/AboutMe" />
        </Helmet>
        <body className="w-screen h-screen bg-black">
    <Navbar />
    </body> </>);
}

export default AboutMe;
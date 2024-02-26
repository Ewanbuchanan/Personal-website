import {Helmet} from "react-helmet-async";
import React from "react";
import NaviBar from "../Components/NaviBar";

function Resume() {
    return (<>
        <Helmet>
            <title>Resume</title>
            <meta name="description" content="My Resume" />
            <link rel="canonical" href="/Resume" />
        </Helmet>
        <body className="w-screen h-screen bg-black">
        <NaviBar />
        </body> </>);
}
export default Resume;
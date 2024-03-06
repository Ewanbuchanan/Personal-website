import {Helmet} from "react-helmet-async";
import React from "react";
import NaviBar from "../Components/NaviBar";
import MobileNavBar from "../Components/MobileNavBar";

function PreviousProjects() {
    return (<>
        <Helmet>
            <title>Previous Projects</title>
            <meta name="description" content="A list of my best past projects" />
            <link rel="canonical" href="/PreviousProjects" />
        </Helmet>
        <body className="w-screen h-screen bg-black">
        <h1 className="hidden">Previous Works Page Ewan Buchanan</h1>
        <div className="hidden xl:block">
            <NaviBar/>
        </div>
        <div className="absolute xl:hidden top-50  sm:block">
            <MobileNavBar/></div>
        <h1 className="absolute text-3xl text-white left-[45%] top-[50%]">Under construction</h1>
        </body>
    </>);
}

export default PreviousProjects
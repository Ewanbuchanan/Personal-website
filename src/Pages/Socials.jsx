import {Helmet} from "react-helmet-async";
import React from "react";
import NaviBar from "../Components/NaviBar";
import MobileNavBar from "../Components/MobileNavBar";

function Socials() {
    return (<>
        <Helmet>
            <title>Socials</title>
            <meta name="description" content="Links to my social media pages" />
            <link rel="canonical" href="/Socials" />
        </Helmet>
        <h1 className="hidden">Socials Page Ewan Buchanan</h1>
        <body className="w-screen h-screen bg-black">
        <div className="hidden xl:block">
            <NaviBar/>
        </div>
        <div className="absolute xl:hidden top-50  sm:block">
            <MobileNavBar/></div>
        <h1 className="absolute text-3xl text-white left-[45%] top-[50%]">Under construction</h1>
        </body>
    </>);
}

export default Socials;
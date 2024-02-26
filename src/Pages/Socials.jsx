import {Helmet} from "react-helmet-async";
import React from "react";
import NaviBar from "../Components/NaviBar";

function Socials() {
    return (<>
        <Helmet>
            <title>Socials</title>
            <meta name="description" content="Links to my social media pages" />
            <link rel="canonical" href="/Socials" />
        </Helmet>
        <body className="w-screen h-screen bg-black">
        <NaviBar />
        </body> </>);
}
export default Socials;
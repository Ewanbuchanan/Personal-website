import {Helmet} from "react-helmet-async";
import React from "react";
import NaviBar from "../Components/NaviBar";

function ContactMe() {
    return (<>
        <Helmet>
            <title>Contact Me</title>
            <meta name="description" content="Contact Me" />
            <link rel="canonical" href="/ContactMe" />
        </Helmet>
        <body className="w-screen h-screen bg-black">
        <NaviBar />
        </body> </>);
}
export default ContactMe;
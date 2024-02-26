import {Helmet} from "react-helmet-async";
import React from "react";
import NaviBar from "../Components/NaviBar";

function PreviousProjects() {
    return (<>
        <Helmet>
            <title>Previous Projects</title>
            <meta name="description" content="A list of my best past projects" />
            <link rel="canonical" href="/PreviousProjects" />
        </Helmet>
        <body className="w-screen h-screen bg-black">
        <h1 className="hidden">Previous Works Page Ewan Buchanan</h1>
        <NaviBar/>
        </body>
    </>);
}

export default PreviousProjects
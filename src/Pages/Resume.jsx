import {Helmet} from "react-helmet-async";
import React from "react";
import NaviBar from "../Components/NaviBar";
import {EmbedPDF} from "@simplepdf/react-embed-pdf";
import MobileNavBar from "../Components/MobileNavBar";

function Resume() {
    return (<>
        <Helmet>
            <title>Resume</title>
            <meta name="description" content="My Resume" />
            <link rel="canonical" href="/Resume" />
        </Helmet>
        <body className="w-screen h-screen bg-gradient-to-b from-green-950 to-black">
        <h1 className="hidden">Resume Page Ewan Buchanan</h1>
        <div className="hidden xl:block">
            <NaviBar/>
        </div>
        <div className="absolute xl:hidden top-50  sm:block">
            <MobileNavBar/></div>
        <div className="container py-24">
        <EmbedPDF
            mode="inline"
            className = "absolute hidden xl:block left-[25%] w-[1000px] h-[800px]"
            documentURL={"https://qkw9vyd7.simplepdf.eu/form/4f869aa65398926be0e027ca12b10c8ece877e698dd5365d96f23ac6c8b0a9f6"}
        />
            <EmbedPDF
                mode="inline"
                className = "absolute xl:hidden top-50 w-full h-full sm:block"
                documentURL={"https://qkw9vyd7.simplepdf.eu/form/4f869aa65398926be0e027ca12b10c8ece877e698dd5365d96f23ac6c8b0a9f6"}
            />
        </div>
        </body>
    </>);
}

export default Resume;
import React from "react";
import {Helmet} from "react-helmet-async";
import NaviBar from "../Components/NaviBar";
import MobileNavBar from "../Components/MobileNavBar";

function AboutMe(){
    return (<>
        <Helmet>
            <title>About Me</title>
            <meta name="description" content="Software Engineer" />
            <link rel="canonical" href="/AboutMe" />
        </Helmet>
        <body className="w-screen h-screen bg-gradient-to-bl from-[#344e41] to-[#dad7cd]">
        <h1 className="hidden">About Me Page Ewan Buchanan</h1>
        <div className="hidden xl:block">
            <NaviBar/>
        </div>

        <div className="absolute xl:hidden top-50  sm:block">
            <MobileNavBar/></div>
        <h1 className="absolute text-3xl text-white left-[45%] top-[50%]">Under construction</h1>
        <div className="font-serif hidden py-24">
            <div><h2 className="text-2xl font-bold top-4 w-96">My name is Ewan Buchanan, and i am from Nanaimo, British
                Columbia</h2>
                <p className="border-2 border-black max-w-80">I was born in Nanaimo in 2005, shortly after me and my
                    family moved to Haida Gwai,
                    where i spend the first few years of my life</p></div>
            <div className="w-screen py-24">
                <h2 className="absolute top-[35%] text-3xl font-bold left-[75%] max-w-60">Career: Meat Cutter</h2>
                <p className="absolute border-2 border-black  text-2xl left-[59%] max-w-100">When i was in grade 6 i was
                    diagnosed with learning disorders that caused the adults in my life to treat me different
                    Sudddenly I was not just a student but a student with special needs. I was always told to slow down,
                    and stay behind my peers.
                    For years this knocked me, and i gave up on becoming a programmer. It was not until grade 10 when a
                    doctor gave me a list
                    of possible career paths and the number 1 she reccomeneded to me was "Meat Cutter". In that moment I
                    realized i will
                    not do anything but become a software engineer. In a year I would raise my average from the 60s to
                    97%, and would become
                    the top stem student in my grade.</p></div>
            <div><h2>Programming</h2>
                <p>I would first begin to Use Python and created small personal projects for myself, I would submit them
                    in school
                    even when programming was not needed. My school did not have a programming class so i self learned.
                    I would learn the basics of Git, Object Oriented Design, and data structures by myself</p></div>
            <div><h2>UBC</h2>
                <p>I would end up graduating and going to the University of British Columbia to study Computer Science.
                    So Far I have taken three computer science classes where I would learn fundamental concepts such as
                    Data Strucutes and algoriythms, programming in Java, Version Control, Object oritented design,
                    Systematic program design, and more</p></div>
            <div><h2>Outside of school</h2>
                <p>Outside of school you will likley catch me working a part-time job, playing video games, hanging out
                    with friends,
                    or mountian biking. I love exploring and trying new things.</p></div>

        </div>


        </body>
    </>);
}

export default AboutMe;
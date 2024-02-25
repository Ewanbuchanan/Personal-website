
import ReactDOM from "react-dom/client";
import React from "react";
import {Navbar} from "flowbite-react";

function AboutMe(){
    const aboutMe =
    <body className="w-screen h-screen bg-black">
    <Navbar />
    </body>
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(aboutMe);
    return <body id='root'></body>
}

export default AboutMe;
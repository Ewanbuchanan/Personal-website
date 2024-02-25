import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./Pages/Start";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import PreviousProjects from "./PreviousProjects";
import Resume from "./Pages/Resume";
import Socials from "./Pages/Socials";
import App from "./Pages/App";

function Main(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Start />}/>
            <Route path="/App" element={<App/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/ContactMe" element={<ContactMe/>}/>
            <Route path="/PreviousProjects" element={<PreviousProjects/>}/>
            <Route path="/Resume" element={<Resume/>}/>
            <Route path="/Socials" element={<Socials/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}
export default Main;
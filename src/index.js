import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import PreviousProjects from "./PreviousProjects";
import Resume from "./resume";
import Socials from "./Socials";
import Start from "./Start";




    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <React.Fragment>
                <title>Ewan Buchanan</title>
            </React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route path="/App" element={<App />}/>
                <Route path="/AboutMe" element={<AboutMe />}/>
                <Route path="/ContactMe" element={<ContactMe />} />
                <Route path="/PreviousProjects" element={<PreviousProjects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/Socials" element={<Socials />} />
                <Route path="/Start" element={<Start />} />
            </Routes>
        </BrowserRouter>
        <Start />
    </React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Service from "./pages/Service";
import Team from "./pages/Team";

export default function AllRouter() {
    return (
        <>
            <Routes>
                <Route element={<Home />} path="/"/>
                <Route element={<About />} path="/About"/>
                <Route element={<Service />} path="/Service"/>
                <Route element={<WhyUs />} path="/WhyUs"/>
                <Route element={<Team />} path="/Team"/>
            </Routes>
        </>
    );
}


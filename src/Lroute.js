import React from "react";
import { Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Notfound from "./Notfound";

function Lroute() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Notfound />}></Route>
            </Routes>

        </div>
    )
}
export default Lroute;
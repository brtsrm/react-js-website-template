import React, {useEffect} from 'react';
import {HeroBg} from "../../Images";

import 'swiper/css';
import 'swiper/css/pagination';
import {Link, NavLink, useLocation} from "react-router-dom";
import Slider from "./Slider";


function Header() {

    const location = useLocation();
    useEffect(() => {

        if (location.pathname === "/"){
            document.body.classList.add("sub_page")
        }else{
            document.body.classList.remove()
        }

    },[location])
    return (
        <>
            <div className="hero_area">

                <div className="hero_bg_box">
                    <div className="bg_img_box">
                        <img src={HeroBg} alt=""/>
                    </div>
                </div>

                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <Link className="navbar-brand" to={"/"}>
                                <span>
                                  Finexo
                                </span>
                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className={(location.pathname === "/" ? "nav-item active" : "nav-item")}>
                                        <NavLink to={"/"} className="nav-link">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className={(location.pathname === "/About" ? "nav-item active" : "nav-item")}>
                                        <NavLink to={"/About"} className="nav-link">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className={(location.pathname === "/Service" ? "nav-item active" : "nav-item")}>
                                        <NavLink to={"/Service"} className="nav-link">
                                            Service
                                        </NavLink>
                                    </li>
                                    <li className={(location.pathname === "/WhyUs" ? "nav-item active" : "nav-item")}>
                                        <NavLink to={"/WhyUs"} className="nav-link">
                                            Why Us
                                        </NavLink>
                                    </li>
                                    <li className={(location.pathname === "/Team" ? "nav-item active" : "nav-item")}>
                                        <NavLink to={"/Team"} className="nav-link">
                                            Team
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
                {(location.pathname === "/" && <Slider />)}
            </div>
        </>
    );
}

export default Header;
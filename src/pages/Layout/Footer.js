import React from 'react';
import {Link, NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <section className="info_section layout_padding2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_contact">
                                <h4>
                                    Address
                                </h4>
                                <div className="contact_link_box">
                                    <Link to={"/"}>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                  Location
                </span>
                                    </Link>
                                    <Link to={"/"}>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                  Call +01 1234567890
                </span>
                                    </Link>
                                    <Link to={"/"}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                  demo@gmail.com
                </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="info_social">
                                <Link to={"/"}>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </Link>
                                <Link to={"/"}>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </Link>
                                <Link to={"/"}>
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </Link>
                                <Link to={"/"}>
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col">
                            <div className="info_detail">
                                <h4>
                                    Info
                                </h4>
                                <p>
                                    necessary, making this the first true generator on the Internet. It uses a
                                    dictionary of over 200 Latin words, combined with a handful
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 mx-auto info_col">
                            <div className="info_link_box">
                                <h4>
                                    Links
                                </h4>
                                <div className="info_links">
                                    <NavLink to={"/"} className={({isActive}) => isActive && "active"}>Home</NavLink>
                                    <NavLink to={"/About"}
                                             className={({isActive}) => isActive && "active"}>About</NavLink>
                                    <NavLink to={"/WhyUs"} className={({isActive}) => isActive && "active"}>Why
                                        Us</NavLink>
                                    <NavLink to={"/Team"}
                                             className={({isActive}) => isActive && "active"}>Team</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 info_col ">
                            <h4>
                                Subscribe
                            </h4>
                            <form action="#">
                                <input type="text" placeholder="Enter email"/>
                                <button type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By
                        <Link to="https://html.design/">Free Html Templates</Link>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Footer;
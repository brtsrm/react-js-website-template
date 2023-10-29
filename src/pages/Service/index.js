import React from 'react';
import OurService from "../../component/OurService";
import {ServiceImage1, ServiceImage2, ServiceImage3} from "../../Images";
import {Link} from "react-router-dom";

export default function Index() {
    return (
        <>
            <section className="service_section layout_padding">
                <div className="service_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2>
                                Our <span>Services</span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration
                            </p>
                        </div>
                        <div className="row">
                            <OurService icon={ServiceImage1}
                                        description={"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"}
                                        title={"CURRENCY WALLET"}/>
                            <OurService icon={ServiceImage2}
                                        description={"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"}
                                        title={"SECURITY STORAGE"}/>
                            <OurService icon={ServiceImage3}
                                        description={"fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"}
                                        title={"EXPERT SUPPORT"}/>
                        </div>
                        <div className="btn-box">
                            <Link to={"/service"}>
                                View All
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


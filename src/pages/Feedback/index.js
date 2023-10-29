import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import FeedBack from "../../component/FeedBack";
import {Client1} from "../../Images";

export default function Index() {
    return (
        <>
            <section className="client_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center psudo_white_primary mb_45">
                        <h2>
                            What says our <span>Customers</span>
                        </h2>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        watchSlidesVisibility={true}
                        navigation={{nextEl: ".arrow-left", prevEl: ".arrow-right"}}
                        autoHeight={true}
                        modules={[Navigation, Pagination]}
                        rewind={true}

                    >
                        <SwiperSlide>
                            <FeedBack
                                customername={"Zen Court"}
                                companyname={"magna aliqua. Ut"}
                                image={Client1}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeedBack
                                customername={"Zen Court"}
                                companyname={"magna aliqua. Ut"}
                                image={Client1}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeedBack
                                customername={"Zen Court"}
                                companyname={"magna aliqua. Ut"}
                                image={Client1}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-nav">
                        <button type="button" role="presentation" className="swiper-prev arrow-left mr-3"><i
                            className="fa fa-angle-left"
                            aria-hidden="true"></i>
                        </button>
                        <button type="button" role="presentation" className="swiper-next arrow-right"><i
                            className="fa fa-angle-right"
                            aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}


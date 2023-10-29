import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {SliderImg} from "../../Images";

export default function Slider() {
    return (

        <section className="slider_section ">
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-box">
                                    <h1>
                                        Crypto <br/>
                                        Currency
                                    </h1>
                                    <p>
                                        Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                                        magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                                        suscipit fugiat molestias, veniam, vel architecto veritatis delectus
                                        repellat modi impedit sequi.
                                    </p>
                                    <div className="btn-box">
                                        <a href="" className="btn1">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src={SliderImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-box">
                                    <h1>
                                        Crypto <br/>
                                        Currency
                                    </h1>
                                    <p>
                                        Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                                        magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                                        suscipit fugiat molestias, veniam, vel architecto veritatis delectus
                                        repellat modi impedit sequi.
                                    </p>
                                    <div className="btn-box">
                                        <a href="" className="btn1">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src={SliderImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-box">
                                    <h1>
                                        Crypto <br/>
                                        Currency
                                    </h1>
                                    <p>
                                        Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                                        magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                                        suscipit fugiat molestias, veniam, vel architecto veritatis delectus
                                        repellat modi impedit sequi.
                                    </p>
                                    <div className="btn-box">
                                        <a href="" className="btn1">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src={SliderImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>

    );
}


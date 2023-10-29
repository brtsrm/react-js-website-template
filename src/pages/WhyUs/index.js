import React from 'react';
import UsComponent from "../../component/UsComponent";
import {Wcu1, Wcu2, Wcu3, Wcu4} from "../../Images";
import {Link} from "react-router-dom";

export default function Index() {
    return (
        <>
            <section className="why_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Why Choose <span>Us</span>
                        </h2>
                    </div>
                    <div className="why_container">
                        <UsComponent image={Wcu1} title={"Expert Management"}
                                     description={"Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus"}/>
                        <UsComponent image={Wcu2} title={"Secure Investment"}
                                     description={"Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus"}/>
                        <UsComponent image={Wcu3} title={"Instant Trading"}
                                     description={"Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus"}/>
                        <UsComponent image={Wcu4} title={"Happy Customers"}
                                     description={"Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus"}/>
                    </div>
                    <div className="btn-box">
                        <Link to="/WhyChoseUs">
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}


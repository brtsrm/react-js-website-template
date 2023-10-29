import React from 'react';
import {Link} from "react-router-dom";

export default function OurService({icon, title, description, patc}) {
    return (
        <>
            <div className="col-md-4 ">
                <div className="box ">
                    <div className="img-box">
                        <img src={icon} alt=""/>
                    </div>
                    <div className="detail-box">
                        <h5>
                            {title}
                        </h5>
                        <p>{description}</p>
                        <Link to={`/service/${patc}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
}


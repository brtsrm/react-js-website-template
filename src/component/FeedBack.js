import React from 'react';

export default function FeedBack({image,customername,companyname,description}) {
    return (
        <>
            <div className="item">
                <div className="box">
                    <div className="img-box">
                        <img src={image} alt="" className="box-img"/>
                    </div>
                    <div className="detail-box">
                        <div className="client_id">
                            <div className="client_info">
                                <h6>
                                    {customername}
                                </h6>
                                <p>
                                    {companyname}
                                </p>
                            </div>
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}


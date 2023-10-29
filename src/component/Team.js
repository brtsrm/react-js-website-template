import React from 'react';
import "font-awesome/css/font-awesome.css"

export default function Team({
                                 image,
                                 fisrtAndLastName,
                                 title,
                                 facebook = null,
                                 twitter = null,
                                 linkedin = null,
                                 instagram = null,
                                 youtube = null
                             }) {
    return (
        <>

            <div className="col-lg-3 col-sm-6">
                <div className="box ">
                    <div className="img-box">
                        <img src={image} className="img1" alt=""/>
                    </div>
                    <div className="detail-box">
                        <h5>
                            {fisrtAndLastName}
                        </h5>
                        <p>
                            {title}
                        </p>
                    </div>
                    <div className="social_box">
                        {facebook && (
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                        )}
                        {twitter && (
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                        )}
                        {linkedin && (

                                <i className="fa fa-linkedin" aria-hidden="true"></i>

                        )}
                        {instagram && (
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                        )}
                        {youtube && (
                                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}


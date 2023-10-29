import React from 'react';
export default function UsComponent({image,title,description}) {
    return (
        <>
            <div className="box">
                <div className="img-box">
                    <img src={image} alt=""/>
                </div>
                <div className="detail-box">
                    <h5>
                        {title}
                    </h5>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}


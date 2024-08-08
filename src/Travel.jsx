import React from "react";

export default function Travel(travelDetails){
    // console.log(travelDetails)
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = travelDetails
    return (
        <div className="travel-container">
            <div className="travel-img">
                <img src={imageUrl} alt="travel image" />
            </div>
            <div className="travel-info">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{location}</p>
                    <a href={googleMapsUrl} target="_blank">View on Google maps</a>
                </div>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="date">
                    <h2>{startDate} - {endDate}</h2>
                </div>
                <div className="desc">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
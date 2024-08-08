import React from "react";
import data from "./data";
import Travel from "./Travel";

export default function TravelList(){

    const listToRender = data.map(item => {
        return (
            <Travel key={item.id}
            {...item}/>
        )
    })

    return(
        <div className="travel-list">
            {listToRender}
        </div>
    )
}
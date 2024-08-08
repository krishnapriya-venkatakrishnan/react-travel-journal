import React from "react";
import logo from "./assets/travelLogo.png"

export default function Header(){
    return (
        <header>
            <div className="header">
                <img src={logo} alt="logo" />
                <p>my travel journal.</p>
            </div>
        </header>
    )
}
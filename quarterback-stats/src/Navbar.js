import "./Navbar.css"
import React from "react";
export default function Navbar(){

    return <nav className = "nav">
        <a href ="/" className="site-title"><img className="nfl-logo" src="https://1000logos.net/wp-content/uploads/2017/05/NFL-logo.png" alt="NFL Logo" width="70" height="50"/></a>
        <ul>
            <li>
                <a href="/top-20">Most Yards Thrown</a>
            </li>
            <li>
                <a href="/most-sacked">Most Sacked</a>
            </li>
            <li>
                <a href="/most-interceptions">Most Interceptions Thrown</a>
            </li>
        </ul>
    </nav>
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function MostInterceptions() {
    const [mostInterceptions, setMostInterceptions] = useState(null);

    useEffect(() => {
        const fetchMostSacked = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/fetch/most-interceptions");
                console.log(response.data); // Log the response data to inspect
                setMostInterceptions(response.data);
            } catch (error) {
                console.error("Cannot Fetch Most Sacked", error);
            }
        };

        fetchMostSacked();
    }, []);

    return (
        <div className="App">
            <Navbar/>
            <h1 className="title">Most Interception's thrown</h1>
            <div className="container">
                <div className="player-cards-container">
                    {mostInterceptions ? (
                        mostInterceptions.map((player, index) => (
                            <div key={index} className="player-cards">
                                <h3 className="title-name">{index + 1}. {player.player_name}</h3>
                                <img
                                    className="player-img-2"
                                    src={player.image_url}
                                    alt={`${player.player_name}'s photo`}
                                    width="200"
                                    height="175"
                                />
                                <h3 className="yards-thrown">{player.interceptions} Interceptions Thrown</h3>
                            </div>
                        ))
                    ) : (
                        <p>Players Loading....</p>
                    )}
                </div>
            </div>
        </div>
    )
        ;
}

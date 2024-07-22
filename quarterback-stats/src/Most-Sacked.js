import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function MostSacked() {
    const [mostSacked, setMostSacked] = useState(null);

    useEffect(() => {
        const fetchMostSacked = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/fetch/most-sacked");
                console.log(response.data); // Log the response data to inspect
                setMostSacked(response.data);
            } catch (error) {
                console.error("Cannot Fetch Most Sacked", error);
            }
        };

        fetchMostSacked();
    }, []);

    return (
    <div className="App">
        <Navbar/>
        <h1 className="title">Most Sacked Quaterbacks In Order</h1>
        <div className="container">
            <div className="player-cards-container">
                {mostSacked ? (
                    mostSacked.map((player, index) => (
                        <div key={index} className="player-cards">
                            <h3 className="title-name">{index + 1}. {player.player_name}</h3>
                            <img
                                className="player-img-2"
                                src={player.image_url}
                                alt={`${player.player_name}'s photo`}
                                width="200"
                                height="175"
                            />
                            <h3 className="yards-thrown">{player.sacks} Sacks</h3>
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

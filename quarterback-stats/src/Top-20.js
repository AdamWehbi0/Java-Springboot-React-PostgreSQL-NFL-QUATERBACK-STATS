import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import './Top-20.css'
import axios from "axios";

export default function Top20(){

    const [topPlayersData,setTopPlayersData] = useState(null);

    useEffect(() => {

        const fetchTopPlayers = async () =>{
            try{
                const response = await axios.get("http://localhost:8080/api/fetch/most-yards");
                setTopPlayersData(response.data);
            }catch(error){
                console.error("Cannot fetch Top Player Data",error);
            }
        };

        fetchTopPlayers();
    }, [])

    return (
        <div className="App">
            <Navbar/>
            <h1 className= "title">Most Yards Thrown In Order</h1>
            <div className="container">
                <div className="player-cards-container">

                    {topPlayersData ? (
                        topPlayersData.map((players, index) => (
                            <div key={index} className="player-cards">
                                <h3 className= "title-name">{index + 1}. {players.player_name}</h3>
                                <img className="player-img-2"
                                     src={players.image_url}
                                     alt={`${players.player_name}'s photo`}
                                     width="200"
                                     height="175"
                                />
                                <h3 className= "yards-thrown">{players.yards} Yard's Thrown</h3>

                            </div>
                        ))
                    ) : (
                        <p>Players Loading....</p>
                    )
                    }
                </div>
            </div>
        </div>
    );
}

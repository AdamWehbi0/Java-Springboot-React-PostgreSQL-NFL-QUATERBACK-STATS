import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './App.css';

function HomePage() {
    const [playerName, setPlayerName] = useState('');
    const [playerData, setPlayerData] = useState(null);
    const [specificPlayerData, setSpecificPlayerData] = useState(null);

    useEffect(() => {
        // Fetch the specific player's data when the component mounts
        const fetchSpecificPlayerData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/fetch/Dak Prescott');
                setSpecificPlayerData(response.data);
            } catch (error) {
                console.error("There was an error fetching data for the specific player", error);
            }
        };

        fetchSpecificPlayerData();
    }, []);

    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    const handleSearch = async () => {
        const formattedPlayerName = toTitleCase(playerName);

        try {
            const response = await axios.get(`http://localhost:8080/api/fetch/${formattedPlayerName}`);
            setPlayerData(response.data);
        } catch (error) {
            console.error("There was an error fetching data for player", error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <div className="whole-page-container">
                    <div className="left-side-container">
                        {specificPlayerData && (
                            <div className="side-bar-stats">
                                <div className="news-card">
                                    <img className="touchdown-lead"
                                         src="https://s.yimg.com/ny/api/res/1.2/bPFj_lgFAlHLgUXuf_7Ftg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://s.yimg.com/os/creatr-uploaded-images/2024-04/018f9720-feb4-11ee-bad3-b2458140f136" />
                                    <div className="news-container">
                                        <h6 className="news-content"><b>NEWS</b></h6>
                                        <a href="https://www.nbcdfw.com/news/sports/dak-prescott-protective-boot/3587590/">
                                            <h3 className="news-content">‘I'm getting older,' Dak Prescott explains why he was wearing a protective boot</h3>
                                        </a>
                                    </div>
                                </div>

                                <div className="news-card">
                                    <img className="touchdown-lead"
                                         src="https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_28/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/e/8/e80c0c6663b3bfac0443796eb875581e6c8cf903/reporter-gives-notable-update-on-contract-talks.jpg" />
                                    <div className="news-container">
                                        <h6 className="news-content"><b>NEWS</b></h6>
                                        <a href="https://www.foxsports.com/watch/fmc-lssqihypnxrgiqiw">
                                            <h3 className="news-content">The Dolphins only option? Pay Tua Tagovailoa the bag | The Herd</h3>
                                        </a>
                                    </div>
                                </div>

                                <div className="news-card">
                                    <img className="touchdown-lead"
                                         src="https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/league/hwkjdr9iydyvo6mljrq5.jpg" />
                                    <div className="news-container">
                                        <h6 className="news-content"><b>NEWS</b></h6>
                                        <a href="https://www.nfl.com/news/justin-jefferson-not-mad-at-kirk-cousins-for-leaving-vikings-on-to-the-next">
                                            <h3 className="news-content">Justin Jefferson 'not mad' at Kirk Cousins for leaving Vikings in free agency: 'It's on to the next'</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="main-container">
                        <h2 className="search-title">Search For Quarterback's</h2>
                        <input
                            className="search-bar"
                            type="text"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            placeholder="Enter Players Name"
                        />
                        <button className="search-button" onClick={handleSearch}>Search</button>
                        {playerData ? (
                            <div className="card">
                                <h3 className="card-content player-name">{playerData.player_name}'s Stats</h3>
                                <img
                                    className="player-img"
                                    src={playerData.image_url}
                                    alt={`${playerData.player_name}'s photo`}
                                    width="200"
                                    height="175"
                                />
                                <table className="card-table">
                                    <tbody>
                                    <tr>
                                        <td><b>Team:</b></td>
                                        <td className= "data1">{playerData.team}</td>
                                        <td><b>Games:</b></td>
                                        <td className= "data">{playerData.games}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Attempts:</b></td>
                                        <td className= "data1">{playerData.attempts}</td>
                                        <td><b>Completions:</b></td>
                                        <td className= "data">{playerData.completions}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Completion Percentage:</b></td>
                                        <td className= "data1">{playerData.completion_percentage}</td>
                                        <td><b>Passing Yards:</b></td>
                                        <td className= "data">{playerData.yards}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Yards Per Attempt:</b></td>
                                        <td className= "data1">{playerData.ypa}</td>
                                        <td><b>Touchdowns:</b></td>
                                        <td className= "data">{playerData.touchdowns}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Touchdown Percentage:</b></td>
                                        <td className= "data1">{playerData.touchdown_percentage}</td>
                                        <td><b>Interceptions:</b></td>
                                        <td className= "data">{playerData.interceptions}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Interception Percentage:</b></td>
                                        <td className= "data1">{playerData.interception_percentage}</td>
                                        <td><b>Longest Throw:</b></td>
                                        <td className= "data">{playerData.longest}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Sacks:</b></td>
                                        <td className= "data1">{playerData.sacks}</td>
                                        <td><b>Sack Yards Lost:</b></td>
                                        <td className= "data">{playerData.sack_yards_lost}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Rating:</b></td>
                                        <td className= "data1">{playerData.rating}</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        ) : (
                            <div className="card">
                                <h1>PLAYER NOT FOUND</h1>
                            </div>
                        )}
                    </div>

                    <div className="right-side-container">
                        {specificPlayerData && (
                            <div className="side-bar-stats">
                                <div className="news-card">
                                    <img className="touchdown-lead"
                                         src="https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/league/myqrzhh00vmsrkscudvn.jpg"/>
                                    <div className="news-container">
                                        <h6 className="news-content"><b>NEWS</b></h6>
                                        <a href="https://www.nfl.com/news/bills-rookie-wr-keon-coleman-plans-to-be-himself-i-m-not-gabe-i-m-not-stef-i-m-just-keon">
                                            <h3 className="news-content-right">Bills rookie WR Keon Coleman plans to be
                                                himself: 'I'm not Gabe, I'm not Stef, I'm just Keon'</h3>
                                        </a>
                                    </div>
                                </div>

                                <div className="news-card">
                                    <img className="touchdown-lead"
                                         src="https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/league/i4jy2raggdam945eqkzp.jpg" />
                                    <div className="news-container">
                                        <h6 className="news-content"><b>NEWS</b></h6>
                                        <a href="https://www.nfl.com/news/2024-nfl-schedule-release-top-10-prime-time-games">
                                            <h3 className="news-content-right">2024 NFL schedule release: Top 10 prime-time games</h3>
                                        </a>
                                    </div>
                                </div>

                                <div className="news-card">
                                    <img className="touchdown-lead"
                                         src="https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/league/fsoma9howvr3eawpak6e.jpg" />
                                    <div className="news-container">
                                        <h6 className="news-content"><b>NEWS</b></h6>
                                        <a href="https://www.nfl.com/news/2024-nfl-schedule-what-we-learned-three-biggest-matchups-takeaways-for-all-32-teams">
                                            <h3 className="news-content-right">2024 NFL schedule, What We Learned: Three biggest matchups, takeaways for all 32 teams</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomePage;

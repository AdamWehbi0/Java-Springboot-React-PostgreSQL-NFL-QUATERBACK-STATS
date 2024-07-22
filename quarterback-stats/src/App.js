import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Top20 from "./Top-20";
import MostSacked from "./Most-Sacked";
import MostInterceptions from "./Most-Interceptions";
import axios from "axios";
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/top-20" element={<Top20 />} />
                    <Route path="/most-sacked" element={<MostSacked/> } />
                    <Route path="/most-interceptions" element={<MostInterceptions/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

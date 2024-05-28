import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home';
import GameList from './components/GameList.jsx';
import GameDetail from './components/GameDetail.jsx';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/games/:productId" element={<GameDetail />} />
            </Routes>
        </Router>
    );
}

export default App;

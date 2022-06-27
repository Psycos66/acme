import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
    return (
        <div className='App'>
            <Router>
                <div className='content'>
                    <Routes>
                        <Route exact path="/" element={<Login/>}/>
                        <Route exact path="/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

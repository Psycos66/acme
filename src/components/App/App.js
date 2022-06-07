import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
    return (
        <div className='App'>
            <Router>
                <div className='header'>
                    <Link exact activeClassName="active" to="/">Home</Link>
                    <Link activeClassName="active" to="/login">Login <small>Access without token
                        only</small></Link>
                    <Link activeClassName="active" to="/dashboard">Dashboard <small>Access with token
                        only</small></Link>
                </div>
                <div className='content'>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {setUserSession} from "../../Utils/Common";

import "./Styles/Login.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleLogin = () => {
        setError(null);
        setLoading(null);
        axios.post("http://localhost:3001/user/login", {
            email: username,
            password: password
        }).then(response => {
            setLoading(false)
            setUserSession(response.data.token, response.data.userId)
            navigate('/dashboard')
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401 || error.response.status === 400) {
                setError(error.response.data.erreur)
            } else {
                setError("Something went wrong. Please try again later.")
            }
        })
    }

    return (
        <div className="center-div">
            <div className="content-div">
                <p className="form-login"> Bienvenue sur le site ACME </p><br/>
                <p className="form-login">Username</p>
                <input type="text"
                       value={username}
                       className="form-login"
                       onChange={e => setUsername(e.target.value)}
                />
                <p className="form-login">Password</p>
                <input type="password"
                       value={password}
                       className="form-login"
                       onChange={e => setPassword(e.target.value)}
                />
                <br/>
                {error && <div className="error"> {error} </div>}
                <br/><br/>
                <input type="button"
                       value={loading ? "Loading..." : "Login"}
                       disabled={loading}
                       className="form-button-login"
                       onClick={handleLogin}
                />
            </div>
        </div>
    )
}

export default Login
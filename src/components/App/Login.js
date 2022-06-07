import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {setUserSession} from "../../Utils/Common";

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
            setUserSession(response.data.token,response.data.user)
            navigate('/dashboard')
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401 ||error.response.status === 400) {
                setError(error.response.data.erreur)
            } else {
                setError("Something went wrong. Please try again later.")
            }
        })
    }

    return (
        <div>
            Login <br/><br/>
            <div>
                Username <br/>
                <input type="text"
                       value={username}
                       onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                Password <br/>
                <input type="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
            </div>
            <br/>
            {error && <div className="error"> {error} </div>}
            <input type="button"
                   value={loading ? "Loading..." : "Login"}
                   disabled={loading}
                   onClick={handleLogin}
            />
        </div>
    )
}

export default Login
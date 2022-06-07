import React from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login')
    }

    return (
        <div>
            Welcome User ! <br/><br/>
            <input
                type="button"
                value="logout"
                onClick={handleLogout}
            />
        </div>
    )
}

export default Dashboard
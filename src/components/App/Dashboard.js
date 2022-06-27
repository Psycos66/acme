import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getToken, getUser, removeUserSession, setUserSession} from "../../Utils/Common";
import axios from "axios";

const Dashboard = () => {


    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:3001/product/collection",
        ).then(response => {
            console.log(response)
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 400) {
                setError(error.response.data.erreur)
            } else {
                setError("Something went wrong. Please try again later.")
            }
        })
        // setShoes(data)
    }, [])


    const [shoes, setShoes] = useState([
        {
            id: 1,
            label: 'test1'
        },
        {
            id: 2,
            label: 'test2'
        },

    ])
    const user = getUser()

    const navigate = useNavigate();
    const handleLogout = () => {
        removeUserSession()
        navigate('/')
    }

    return (
        <div>
            Welcome {user} ! <br/><br/>
            {
                shoes.map(e => <li>{e.label}</li>)
            }
            <input
                type="button"
                value="logout"
                onClick={handleLogout}
            />
        </div>
    )
}

export default Dashboard
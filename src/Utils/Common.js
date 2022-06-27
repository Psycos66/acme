import axios from "axios";

export const getUser = () => {
    const idUser = sessionStorage.getItem("userId");
    if (idUser) return (JSON.parse(idUser))
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const setUserSession = (token, userId) => {
    sessionStorage.setItem("token", token);
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
    sessionStorage.setItem("userId", JSON.stringify(userId));
}

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
}
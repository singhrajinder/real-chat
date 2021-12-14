import React from 'react'
import {Navigate} from  "react-router-dom";

const PrivateRoute = ({children }) => {
    const user = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null ; 
    return !user ? <Navigate to = "/" />  : children 
}

export default PrivateRoute

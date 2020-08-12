import React  from 'react'
import {Redirect} from 'react-router'

const Logout=()=>{
    localStorage.clear()
    window.location.href="/"
};

export default Logout;
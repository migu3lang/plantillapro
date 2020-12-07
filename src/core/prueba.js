import React from 'react';
import { NavLink } from "react-router-dom";

function prueba() {
    return (
        <div>
            <h1>Prueba</h1>
            <NavLink
                to="/admin/hijo"
            >Hijo</NavLink>
            <NavLink
                to="/admin/hijo2"
            >Hij 2</NavLink>
        </div>
    )
}

export default prueba;

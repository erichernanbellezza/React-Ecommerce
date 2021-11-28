import React from "react";
import logo from "../../assets/LogoNegro.png";
import { CartWidget } from "../CartWidget/CartWidget";

import "./Navbar.css";

export const Navbar = () => {

    return (
        <div className="header">
            <div className="logo">
                <a href="/">
                    <img className="imagenLogo" src={logo} alt="Hola"/>
                </a>
                <CartWidget/>
            </div>
            <nav>
                <ul className="menu">
                    <li className="menuItem"><a href="/" className="menuLink">Inicio</a></li>
                    <li className="menuItem"><a href="/" className="menuLink">Productos</a></li>
                    <li className="menuItem"><a href="/" className="menuLink">Contacto</a></li>
                </ul>
            </nav>
        </div>
    );
}
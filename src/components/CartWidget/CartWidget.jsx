import React from 'react';
import compra from "../../assets/compra.png";
import "./CartWidget.css"

export const CartWidget = () => {

    return(
        <a href="/"><img src={compra} alt="/" className="cart"/></a>
    )
}
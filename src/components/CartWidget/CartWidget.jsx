import React from 'react';
import compra from '../../assets/images/iconos/compra.png';
import "./CartWidget.scss"

export const CartWidget = () => {

    return(
        <a href="/"><img src={compra} alt="/" className="cart"/></a>
    )
}
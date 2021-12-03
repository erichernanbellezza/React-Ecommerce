import React from 'react'
import { useState } from 'react'
import './buttonAddCart.css'

const buttonAddCart = ({children, onAdd}) => {
    return (
        <button className="buttonAddCart" onClick={onAdd}>{children}</button>
    )
}

export default buttonAddCart
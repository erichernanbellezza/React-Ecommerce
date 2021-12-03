import React from 'react'
import './BtnAddCart.scss'

const BtnAddCart = ({children, onAdd}) => {
    return (
        <button className="btnAddCart mt-3" onClick={onAdd}>{children}</button>
    )
}

export default BtnAddCart

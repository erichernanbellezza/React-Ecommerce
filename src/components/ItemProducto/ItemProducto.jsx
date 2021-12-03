import React from 'react'
import { useHistory } from 'react-router-dom'
import './itemProducto.scss'


const ItemProducto = ({producto}) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/detail/${producto.id}`)
    }

    return (
        <div className="product" onClick={handleClick}>
            <img src={producto.image} alt="" />
            <p className="prodPrice">{producto.price}</p>
            <p className="prodTitle">{producto.name}</p>
            <p className="prodCategory">{producto.category}</p>
        </div>
    )
}

export default ItemProducto

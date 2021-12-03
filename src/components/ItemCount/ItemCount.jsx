import React from 'react'
import { useState } from 'react'
import BtnAddCart from '../BtnAddCart/BtnAddCart'
import "./ItemCount.scss"

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1)
    }

    const disminuir = () => {
        setContador(contador - 1)
    }

    const addCart = () => {
        alert('Se ha agregado el producto al carrito.')
    }

    return (
        <>
        <div className="divBtn mt-5 d-flex">
            <button className="btnStock" onClick={aumentar}
            disabled={contador === stock}
            >
                +
            </button>
            <p>{contador}</p>
            <button className="btnStock" onClick={disminuir}
            disabled={contador === 0}
            >
                -
            </button>
            <p>{contador === stock ? "Stock agotado." : `Stock máximo disponible: ${stock}`}</p>
        </div>
            <BtnAddCart onAdd={addCart}>
                Agregar al carrito
            </BtnAddCart>
        </>
    )
}

export default ItemCount
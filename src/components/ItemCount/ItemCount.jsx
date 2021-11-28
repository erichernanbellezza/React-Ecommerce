import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({stock, count}) => {

    const [contador, setContador] = useState(count)

    const aumentar = () => {
        setContador(contador + 1)
    }

    const disminuir = () => {
        setContador(contador - 1)
    }

    return (
        <div className="divBtn" m-2>
            <button onClick={aumentar}
            disabled={contador === stock}
            >+</button>
            <p>{contador}</p>
            <button onClick={disminuir}
            disabled={contador === 1}
            >-</button>
        </div>
    )
}

export default ItemCount

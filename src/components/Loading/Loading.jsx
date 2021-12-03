import React from 'react'
import loading from '../../assets/images/iconos/cargando.gif'
import './Loading.scss'

const Loading = () => {
    return (
        <div className="loading">
            <div>
                <img src={loading} alt="Cargando" />
            </div>
        </div>
    )
}

export default Loading

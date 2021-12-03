import React from 'react'
import { Link } from 'react-router-dom'
import './FilterMenu.scss'

const FilterMenu = () => {
return (
<>
    <div className="divFilter my-3">
        <Link to="/category/Notebook" className="mx-5 py-2 px-4">Notebook</Link>
        <Link to="/category/Tablet" className="mx-5 py-2 px-4">Tablet</Link>
        <Link to="/category/PC-Escritorio" className="mx-5 py-2 px-4">PC de Escritorio</Link>
    </div>
</>
)
}

export default FilterMenu
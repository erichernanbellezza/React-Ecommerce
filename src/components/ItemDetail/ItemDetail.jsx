import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailDescription from '../ItemDetailDescription/ItemDetailDescription'
import Loading from '../Loading/Loading'
import './ItemDetail.scss'

const ItemDetail = ({products}) => {
    
    console.log(products.description)

    if (products.sizes === undefined || ItemDetailDescription === null) {
        return <Loading/>
    } else {
        return (
            <>
                    <div key={products.id} className="d-flex detail mt-4">
                        <div className="imgDetail w-50">
                            <img src={products.image} alt="" />
                        </div>
                        <div className="prodDetail">
                            <h3>{products.name}</h3>
                            <p className="priceDetail">{products.price}</p>
                            {products.discount ? <p className="discountDetail">Aplica a descuentos (Descuento del {products.percentage}%)</p>: <p className="discountDetail">No aplica a descuentos</p>}
                            <ItemCount stock={products.stock}/>
                        </div>
                    </div>
                    <div className="infoExtra">
                    <ItemDetailDescription products = {products}/>
                    </div>
            </>
        )
    }
    
}
export default ItemDetail

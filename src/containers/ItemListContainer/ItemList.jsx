import React from 'react';
import './itemList.css'
import ItemCount from '../../components/ItemCount/ItemCount';

export const ItemList = () => {
    return(
            <div class="producto">
                <img src="https://images.fravega.com/f300/6f086c336b91239b827b31162edcd7d4.jpg.webp" alt=""/>
                    <h3 class="productoNombre">Motorola Edge 20 Pro</h3>
                    <h6 class="productoPrecio">$109999</h6>
                    <button class="comprar" data-id="2">Comprar</button>
                    <ItemCount stock={5} count={1}/>
            </div>
    )
}
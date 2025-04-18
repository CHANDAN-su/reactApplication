import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const Products = [
    {id: "1", name: "chandan thakur"},
    {id: "2", name: "rabu nagar"},
    {id: "3", name: "Ravina bano"}
]

function ProductList(){

    const {cardItem, addCard, removeFromCard} = useContext(CartContext);

    const isInCart = (id) => cardItem.some((item) => item.id === id);

    return (
        <div>
            <h2>Products</h2>
            {
                Products.map((item) => (
                    <div key={item.id} style={{marginTop: "30px"}}>
                        <span>{item.name}</span>
                        {
                          isInCart(item.id)  ? 
                          ( <button style={{marginLeft: '30px'}} onClick={() => removeFromCard(item.id)}>Remove Item</button>) :
                          ( <button style={{marginLeft: "10px"}} onClick={() => addCard(item)}>Add Item</button>)
                        }
                    </div>
                ))
            }
        </div>
    )
}


export default ProductList;
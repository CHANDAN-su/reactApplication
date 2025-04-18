import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


function Cart(){
    const {cardItem} = useContext(CartContext);

    return (
        <>
        <div style={{marginTop: "10px"}}>
            <h2>Card</h2>
            <p>{cardItem.length} item(s) in cart</p>
            <ul>
            {
                cardItem.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
            </ul>
        </div>
        </>
    )
}

export default Cart;
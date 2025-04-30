import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProider = ({children}) =>{

    const [cardItem, setCardItem] = useState([]);

    const addCard = (item) => {
        setCardItem(prev => [...prev, item]);
    }

    const removeFromCard = (cardItem) => {
        setCardItem(prev => prev.filter((item) => item.id !== cardItem ));
    }

    return (
        <CartContext.Provider value={{cardItem, addCard, removeFromCard}}>
            {children}
        </CartContext.Provider>
    )
}


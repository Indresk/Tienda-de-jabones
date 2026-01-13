import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('Cart'))??[])
    
    const addItem = (item,quantity=1)=>{
        if(isInCart(item.id)){
            const newList = cartList.map((cartItem)=>{
                if(cartItem.id != item.id) return cartItem
                return {...cartItem,userQuantity:cartItem.userQuantity+quantity}
            })
            setCartList(newList)
        }
        else{
            setCartList((list)=> [...list,{...item,userQuantity:quantity}])
        }
    }

    const removeQuantity = (id,quantity=1)=>{
        const newList = cartList.map((cartItem)=>{
            if(cartItem.id != id) return cartItem
            return {...cartItem,userQuantity:cartItem.userQuantity-quantity}
        })
        setCartList(newList)
    }

    const removeItem = (id)=>{
        if(isInCart){
            setCartList((prev)=>prev.filter((item)=>item.id !== id))
            return
        }
    }

    const clear = ()=>{
        setCartList([])
    }

    const isInCart = (id)=>{
        if(cartList.find((item)=>item.id === id)){return true}else{return false};
    }

    useEffect(()=>{
        localStorage.setItem('Cart',JSON.stringify(cartList))
    },[cartList])

    return(
        <CartContext.Provider value={{cartList:cartList,addItem:addItem,removeItem:removeItem,clear:clear,removeQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
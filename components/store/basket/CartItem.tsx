import React from 'react'
import { useShoppingCart } from '@/context/shopingCartContext';
type cartItemProps = {
    id: number,
    quantity: number
}

const CartItem = ({ id, quantity }: cartItemProps) => {
    console.log(id,quantity);
    
    const {removeFromCart} = useShoppingCart();
    return (
        <div className='d-flex'>
            <div>zxc</div>
            <div>zxczx</div>
        </div>
    )
}

export default CartItem
import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from 'react-bootstrap'
import { useShoppingCart } from '@/context/shopingCartContext';
import CartItem from './CartItem';

type shoppingCartProps = {
    isOpen: boolean
}
const ShoppingCart = ({ isOpen }: shoppingCartProps) => {
    const { cartItems, closeCart } = useShoppingCart();
    console.log(isOpen ? cartItems : '');
    {console.log(cartItems)}
    
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='start'>
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={2}>
                    {cartItems?.map(item=> (
                        <CartItem key={item.id} {...item} />
                    ))}
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default ShoppingCart
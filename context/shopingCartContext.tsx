import React from 'react'
import { useContext, createContext, ReactNode, useState } from 'react'
import ShoppingCart from '@/components/store/basket/ShoppingCart'


// Types ------------------------------------
type ShoppingCartProviderProps = {
    children: ReactNode
}

type cartItemType = {
    id: number,
    quantity: number
}

type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number
    increasCartQuantity: (id: number) => void
    decreasCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: cartItemType[]
    cartQuantity: number
    openCart: () => void
    closeCart: () => void
}
//-------------------------------------------
 

// create shopping cart context
const ShoppingCartContext = createContext({} as ShoppingCartContextType);
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

// Shopping cart provider
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItem] = useState<cartItemType[]>([])

    //open cart panel
    const openCart = () => setIsOpen(true);
    //close cart panel
    const closeCart = () => setIsOpen(false);

    // get basket quantity
    const cartQuantity = cartItems.reduce(
        (x, item) => item.quantity + x, 0)

    //Get Item Quantity
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    //Increase Item Quantity
    function increasCartQuantity(id: number) {
        debugger
        setCartItem(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    //Decrease Item Quantity
    function decreasCartQuantity(id: number) {
        setCartItem(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    //Remove from cart
    function removeFromCart(id: number) {
        setCartItem(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increasCartQuantity,
                decreasCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity,
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )

}
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { FiMinus, FiPlus, FiShoppingBag, FiTrash } from 'react-icons/fi';
import { useShoppingCart } from '../../context/shopingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency'
import { useSpring, animated } from '@react-spring/web'
import { CircleTwoLine, Heart, Like, Search, SwitchContrast} from '@icon-park/react';
type StoreItemProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}
export function StoreItem({ id, title, description, price, image }: StoreItemProps) {
    const { getItemQuantity, increasCartQuantity, decreasCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);

    const animation = useSpring({
        from: { y: 15, opacity: 0 },
        to: { y: 0, opacity: 1 },
    })
    return (
        <Col lg={4} md={6} sm={12}>
            <Card className='mt-4 p-2 productCard'>
                <div className='itemHoverOptions'>
                    <a href='#'>
                        <Search />
                    </a>
                    <a href='#'>
                    <Like/>
                    </a>
                    <a href='#'>
                    <SwitchContrast/>
                    </a>
                </div>
                <animated.div
                    style={animation}
                >
                    <Card.Img variant='top' src={image} style={{ objectFit: 'contain', height: '180px' }} />
                </animated.div>
                {/* <Card.Header>{title}</Card.Header> */}
                <animated.div
                    style={animation}>
                    <Card.Body className='d-flex flex-column align-items-start justify-content-between h-100'>

                        <h5 className=''>{formatCurrency(price)}</h5>
                        <div className='text-nowrap overflow-hidden text-truncate me-3 w-100' title={title}>{title}</div>


                        {quantity === 0 ? (
                            <Button variant='light' onClick={() => increasCartQuantity(id)} className='w-auto mt-2 d-flex align-items-center' style={{ fontSize: '1.2rem' }}>
                                <h6 className='m-0 d-flex align-items-center'><FiShoppingBag className='me-2' /><small>Add to cart</small></h6>
                            </Button>
                        ) : (
                            <div className='d-flex align-items-center mt-2' style={{ gap: '0.5rem' }}>
                                <Button variant="light" onClick={() => decreasCartQuantity(id)}> <FiMinus /> </Button>
                                <div><span>{quantity}</span></div>
                                <Button variant="light" onClick={() => increasCartQuantity(id)}> <FiPlus /> </Button>
                                <Button variant='outline-danger' onClick={() => removeFromCart(id)}> <FiTrash /> </Button>
                            </div>
                        )}
                    </Card.Body>
                </animated.div>
            </Card>
        </Col>
    )

}
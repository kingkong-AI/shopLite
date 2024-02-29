import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UseSelector, useSelector } from "react-redux"
import { Button, Row, Col, ListGroup, Card,Image } from "react-bootstrap"
import CheckoutSteps from "../components/CheckoutSteps"
import Message from "../components/Message"

const PlaceOrderScreen = () => {

    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        if(!cart.shippingAddress.address) {
            navigate('/shipping');
        } else if(!cart.paymentMethod) {
            navigate('/payment');
        }
    }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);
  return (
    <>
        <CheckoutSteps step_1 step_2 step_3 step_4 />
        <Row>
            <Col md={8}>
                <ListGroup variant= 'flush'>
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Address:</strong>
                            {cart.shippingAddress.address},{' '}
                            {cart.shippingAddress.city},{' '}
                            {cart.shippingAddress.postalCode},{' '}
                            {cart.shippingAddress.country}
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <p>
                            <strong>Method:</strong>
                            {cart.paymentMethod}
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? (
                                <Message>Your cart is empty</Message>
                            ) : (
                                <ListGroup variant="flush">
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} 
                                                    alt={item.name}
                                                    fluid
                                                    rounded
                                                    />
                                                </Col>
                                                <Col>
                                                    <Link to={`/products/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x {item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    
                                    ))}
                                </ListGroup>
                            )}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>Jain</Col>
        </Row>
    </>
  )
}

export default PlaceOrderScreen
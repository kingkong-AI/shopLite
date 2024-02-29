import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UseSelector, useSelector } from "react-redux"
import { Button, Row, Col, ListGroup, Card,Image } from "react-bootstrap"
import CheckoutSteps from "../components/CheckoutSteps"

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
            <Col md={8}>Akshat</Col>
            <Col md={4}>Jain</Col>
        </Row>
    </>
  )
}

export default PlaceOrderScreen
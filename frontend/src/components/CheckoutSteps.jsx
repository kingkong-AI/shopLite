import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({step_1, step_2, step_3, step_4}) => {
  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            { step_1 ? (
                <LinkContainer to='/login'>
                    <Nav.Link>Sign In</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Sign In</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            { step_2 ? (
                <LinkContainer to='/shipping'>
                    <Nav.Link>Shipping</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Shipping</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            { step_3 ? (
                <LinkContainer to='/payment'>
                    <Nav.Link>Payment</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Payment</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            { step_4 ? (
                <LinkContainer to='/placeorder'>
                    <Nav.Link>Place Order</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Place Order</Nav.Link>
            )}
        </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
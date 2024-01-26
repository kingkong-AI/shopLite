import { Navbar, Nav, Container, NavLink, Badge } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux'

const Header = () => {
    const {cartItems} = useSelector((state) => state.cart);
  return (
    <header>
        <Navbar bg = "dark" variant = "dark" expand = "md" collapsOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={logo} alt="ShopLite" />
                    ShopLite
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/cart">
                    <NavLink><FaShoppingCart />Cart
                    {
                        cartItems.length > 0 && (
                            <Badge pill bg= 'success' style={{marginLeft: '5px'}} >
                                {cartItems.reduce((accumulator, current) => accumulator + current.qty, 0 )}
                            </Badge>
                        )
                    }
                    </NavLink>
                    </LinkContainer>
                    <LinkContainer to="/login">
                    <NavLink><FaUser />Sign In</NavLink>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
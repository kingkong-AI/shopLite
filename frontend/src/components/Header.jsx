import { Navbar, Nav, Container, NavLink } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
        <Navbar bg = "dark" variant = "dark" expand = "md" collapsOnSelect>
            <Container>
                <Navbar.Brand href = "/">
                    <img src={logo} alt="ShopLite" />
                    ShopLite
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink href="/cart"><FaShoppingCart />Cart</NavLink>
                    <NavLink href="/login"><FaUser />Sign In</NavLink>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
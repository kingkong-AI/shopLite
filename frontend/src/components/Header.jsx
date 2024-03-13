import { Navbar, Nav, Container, NavLink, Badge, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'

const Header = () => {
    const {cartItems} = useSelector((state) => state.cart);
    const {userInfo} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();
    const logoutHandler = async () => {
       try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
       } catch (err) {
        console.log(err);
       }
    }
  return (
    <header>
        <Navbar bg = "dark" variant = "dark" expand = "md" collapseOnSelect>
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
                    {userInfo ? (
                        <NavDropdown title = {userInfo.name} id = 'username'>
                            <LinkContainer to = '/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick = {logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <LinkContainer to="/login">
                        <NavLink><FaUser />Sign In</NavLink>
                        </LinkContainer>
                    )}
                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='Admin' id='adminmenu'>
                            <LinkContainer to = '/admin/productlist'>
                                <NavDropdown.Item>Products</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to = '/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to = '/admin/orderlist'>
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    )}
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
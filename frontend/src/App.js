import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {
  Badge,
  CardText,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <Navbar dark color="dark">
          <Container>
            <LinkContainer to="/">
              <NavbarBrand> Amazona </NavbarBrand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Cart
                <Badge pill color="danger">
                  {cart.cartItems.length > 0 ? cart.cartItems.length : 0}
                </Badge>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

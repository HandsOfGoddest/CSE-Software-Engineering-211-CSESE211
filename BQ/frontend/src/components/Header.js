import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import { updateCart, removeAllCart } from "../actions/cartActions";
import "./MyStyle.css";

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(updateCart(cartItems));
    dispatch(removeAllCart());
    dispatch(logout());
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="https://res.cloudinary.com/vitamim/image/upload/v1638074055/BQ/logo_kuroio.png" alt="logo" className="logo" />
      </Link>
      {/*<input type="text" className="search-bar" placeholder="Search" />*/}
      <Route render={({ history }) => <SearchBox history={history} />} />
      <div className="space"></div>
      <div className="cart-info">
        <Link to="/cart">
          <img src="https://res.cloudinary.com/vitamim/image/upload/v1638074114/BQ/cart_mfmks6.png" alt="" className="cart" />
        </Link>
      </div>
      {userInfo ? (
        <>
          <NavDropdown title={userInfo.name} id="username">
            <LinkContainer to="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>
              {" "}
              Logout{" "}
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ) : (
        <Link to="/login">
          <p className="login">Login</p>
        </Link>
      )}
      {userInfo && userInfo.isAdmin && (
        <NavDropdown title="Admin" id="adminmenu">
          <LinkContainer to="/admin/brand">
            <NavDropdown.Item>Quản lý brand</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      )}
      {userInfo && userInfo.isClerk && (
        
        <NavDropdown title="Clerk" id="clerkmenu">
          <LinkContainer to="/clerk">
            <NavDropdown.Item>Quản lý order</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      )}
      

      <img className="bar" src="images/bar.png" alt="bar" />
    </div>
  );
}
export default Header;

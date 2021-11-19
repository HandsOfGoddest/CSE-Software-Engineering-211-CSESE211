import React from "react";
import {Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import "./MyStyle.css";

function Header () {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="images/logo.png" alt="logo" className="logo" />

      </Link>
      {/*<input type="text" className="search-bar" placeholder="Search" />*/}
      <Route render={({history}) => <SearchBox history={history}/>} />
      <div className="space"></div>
      <Link to="/datban">
        <p className="datban">Đặt bàn</p>
      </Link>
      <div className="cart-info">
        
        <Link to="/cart">
          <img src="images/cart.png" alt="" className="cart" />
        </Link>
      </div>
      {userInfo ? (
        <>
        <NavDropdown title={userInfo.name} id="username" >
         
          <NavDropdown.Item>{userInfo.name}</NavDropdown.Item>
          <LinkContainer to="/profile">
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logoutHandler}> Logout </NavDropdown.Item>
          </NavDropdown>
          </>
      ) : (
        <Link to="/login">
          <p className="login">Login</p>
        </Link>
      )}

      <img className="bar" src="images/bar.png" alt="bar" />
    </div>
  );
}
export default Header;

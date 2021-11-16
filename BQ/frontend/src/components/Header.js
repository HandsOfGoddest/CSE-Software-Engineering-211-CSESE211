import React from "react";
import {useDispatch, useSelector} from 'react-redux' 
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {logout} from '../actions/userActions'
import './MyStyle.css'
function Header () {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
      <div className="header">
          <Link to="/">
              <img src="/icon.png" alt = "logo" className = "logo" />
          </Link>
           <input type="text" className="search-bar" placeholder="Search" />

            <Link to = "/datban">
              <p>Đặt bàn</p>
            </Link>
              <Link to="/cart">
                <p> Cart </p>
              </Link>
              {userInfo? ( 
                <NavDropdown title = {userInfo.name} id = 'username'>
                <LinkContainer to = "/profile">
                <NavDropdown.Item>
                Profile
                </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick = {logoutHandler}>
                {" "}
                  Logout {" "}
                </NavDropdown.Item>
                </NavDropdown>
              ): (
              <Link to="/login">
                <p>ĐĂNG NHẬP</p>
              </Link>
              )}
              
              <img className="bar" src="images/bar.png" alt="bar"/>
      </div>
  );
}
export default Header;



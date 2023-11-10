import React from "react";
import styled from "styled-components";
import { NavLink , useNavigate} from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
//import { Button } from "../styles/Button";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const key = "userData";
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(key) !== null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const navigateTo = useNavigate();
  
  const handleSignOut = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);

    navigateTo("/login");
  };

  return (
    <Nav>
      <div className="menuIcon">
        <ul
          className="navbar-list"
          style={{ fontSize: "33px", color: "white" }}
        >
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li> */}
          
          <li>
            <NavLink className="navbar-link" to={isLoggedIn ? "/products" : "/login"}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact 
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
            
              <NavLink style={{color:"white"}} onClick={handleCartClick}>
                Cart<NotificationsNoneIcon style={{fontSize:30}}/>
              </NavLink>
              {isCartOpen && <Cart />}
               <NavLink style={{color:"white"}} onClick={()=>handleSignOut()} to="/">Sign Out</NavLink>
              </>
            
          ) : (
            <li>
              <NavLink className="navbar-link" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </Nav>
  );
};
const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    text-size: 80px;
  }
  li {
    list-style: none;
  }
  .navbar-link {
    color: white;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
`;

export default Navbar;

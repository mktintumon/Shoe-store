import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="./images/logo.png"
          alt="logo"
          style={{ width: '160px', height: '45px', marginTop: "5px", borderRadius: '8px' }}
        />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: #0a1435;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  `;
export default Header;

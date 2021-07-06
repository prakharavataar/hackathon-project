import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import './Header.css';
import Burger from './Burger.js';

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

const NavItems = styled.div`
@media screen and (max-width: 768px) {
  display: none;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const MobileIcon = styled.div `
  display:none;

  @media screen and (max-width: 760px){
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color:red;
  }
`;
// const NavbarLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   padding: 1rem;
//   font-weight: 500px;
//   font-size: 20px;
// `;

const Header = () => {
  return (
    <Navbar >
      <Logo to='/'>Samsung</Logo>
      <MobileIcon>
        {/* <Bars /> */}
          <Burger />
      </MobileIcon>
      <NavItems>
        {/* <NavbarLink to='/'>Home</NavbarLink> */}
        <Link className="nav-item" to='/highlights' activeStyle={{color: "violet",textDecoration:"none"}}>Highlights</Link>
        <Link className="nav-item" to='/design' activeStyle={{color: "violet",textDecoration:"none"}}>Design</Link>
        <Link className="nav-item" to='/experience' activeStyle={{color: "violet",textDecoration:"none"}}>Experience</Link>
        <Link className="nav-item" to='/accessories' activeStyle={{color: "violet",textDecoration:"none"}}>Accessories</Link>
        <span className="nav-indicator"></span>
      </NavItems>
    </Navbar>
  );
};

export default Header;
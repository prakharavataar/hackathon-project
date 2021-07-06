import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    display: ${({ open }) => open ? 'block' : 'none'};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(1%)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 102vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;


export const SidebarWrapper = styled.div `
    color:#fff;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color:#fff;
    cursor: pointer;
    z-index:1000;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
        background-color: coral;
        border-radius:10px;
    }
`

export const SidebarMenu = styled.ul `
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align:center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6,80px);
    }
`
const Sidebar = ({ open }) => {
  return (
    <Ul open={open}>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/highlights'>
                    Highlights
                </SidebarLink>
                <SidebarLink to='/design'>
                    Design
                </SidebarLink>
                <SidebarLink to='/experience'>
                    Experience
                </SidebarLink>
                <SidebarLink to='/accessories'>
                    Accessories
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </Ul>
  )
}

export default Sidebar
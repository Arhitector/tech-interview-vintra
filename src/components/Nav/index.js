import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavWrapper = styled.div`
    display: flex;
    padding: 8px 20px;
    .navbar-nav {
        display: flex;
        list-style-type: none;
    }
    .nav-link {
        margin: 0 10px;
    }
`;

const Navigation = ({userData}) => {
  return (
    <NavWrapper>
      <nav className="navbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/privatePage">
                    PrivatePage
                </NavLink>
            </li>
            <li className="nav-item">
            {
                userData 
                    ?<NavLink className="nav-link" to="/userPage">{userData?.username}</NavLink> 
                    :<NavLink className="nav-link" to="/login"> Login</NavLink>
            }
                
            </li>
        </ul>
      </nav>
    </NavWrapper>
  );
}
export default Navigation;
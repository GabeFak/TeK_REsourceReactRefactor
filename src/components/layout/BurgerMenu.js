import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

const BurgerMenu = ({...props}) => {

  return (
    <div >
        {/* style={{"height": "100vh"}} */}
        <Menu {...props}>
                <>
                    <NavLink className="menu-item" to='/'>Home</NavLink>

                    <NavLink className="menu-item" to="/About">About</NavLink>

                    <NavLink className="menu-item" to="Resources">Resources</NavLink>

                    <NavLink className="menu-item" to="Contact">Contact</NavLink>
                </>
        </Menu>
    </div>
  )
};

export default BurgerMenu;
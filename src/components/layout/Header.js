import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>

                <h2 className="hi">TeK_REsource <i className="what-if-it-was-green">|</i>Home</h2>

                    <div className="clear"></div> 

                        <div className="hcontainer">

                                <NavLink className="hcontainerlink" to='/'>Home</NavLink> 
                            
                                <NavLink className="hcontainerlink" to="/About">About</NavLink>
                                           
                                <NavLink className="hcontainerlink" to="Resources">Resources</NavLink>
                            
                                <NavLink className="hcontainerlink" to="Contact">Contact</NavLink>

                        </div>

                <div className="clear"></div>

            </header>
            
        </div>
    )
}

export default Header;

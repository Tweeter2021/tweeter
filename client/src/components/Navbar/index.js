import React, { useState } from 'react'
import { Nav, NavbarContainer, NavUser, NavMenu, UserName, UserImg, NavItem, NavLinks, NavLogo, Img, NavLogoH } from './navbarelements'
import { IconContext } from 'react-icons/lib'
import logo from './logo.svg';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import '../../App.css'

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

var user = JSON.parse(localStorage.getItem('token'));

const Navbar = ({ toggle }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = () => {
        setAnchorEl(!anchorEl);
    };

    const handleClose = () => {
        setAnchorEl(anchorEl);
    };

    const LogOut = () => {
        localStorage.removeItem('token')
        setAnchorEl(anchorEl);
        window.location.href = '/login'
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='Home'>
                            <Img src={logo} />
                            <NavLogoH>Tweeter</NavLogoH>
                        </NavLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='Home' smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"

                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='explore' smooth={true} duration={500} spy={true}
                                    exact="true">Explore</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='bookmarks' smooth={true} duration={500} spy={true}
                                    exact="true" >Bookmarks</NavLinks>
                            </NavItem>

                        </NavMenu>

                        <NavUser onClick={handleMenu} aria-controls="menu-appbar">
                            <UserImg src={user.profileImg} />
                            <UserName onClick={handleMenu} aria-controls="menu-appbar">{user.name}</UserName>
                            <Menu className="profilemenu"
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                getContentAnchorEl={null}
                                open={open}
                                onClose={handleClose}>

                                <MenuItem onClick={handleClose} ><Link to="Profile"> <AccountCircleRoundedIcon /> My Profile</Link></MenuItem>
                                <MenuItem onClick={handleClose} ><Link to="WhoToFollow"> <GroupRoundedIcon /> Group Chat</Link></MenuItem>
                                <MenuItem onClick={handleClose} ><Link to="Signup"> <SettingsRoundedIcon /> Settings</Link></MenuItem>
                                <div><MenuItem onClick={LogOut} ><Link to="Login"> <ExitToAppRoundedIcon /> Logout</Link></MenuItem></div>
                            </Menu>
                        </NavUser>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
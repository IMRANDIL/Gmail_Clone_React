import React from 'react'

import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import Gmail from '../images/gmail-icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';







const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />

                </IconButton>
                <img draggable='false' src={Gmail} alt="gmail-img" />
                <span>Gmail</span>
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder='Search mail' />
                <ArrowDropDownIcon className='header__inputCarat' />



            </div>

            <div className="header__right">

                <IconButton>

                    <AppsIcon />

                </IconButton>

                <IconButton>
                    <NotificationsNoneIcon />

                </IconButton>

                <Avatar />


            </div>

        </div>
    )
}

export default Header
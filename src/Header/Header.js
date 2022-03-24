import React from 'react'

import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import Gmail from '../images/gmail-icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';







const Header = () => {

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const signout = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        }).catch(err => alert(err.message))





    }




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

                <Avatar src={user?.photoUrl} onClick={signout} style={{ cursor: 'pointer' }} />


            </div>

        </div>
    )
}

export default Header
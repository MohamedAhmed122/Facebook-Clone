import React from 'react'
import logo from '../../assets/logo.png'

import './Styles.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';


const Header =()=>{
    const {currentUser} = useSelector(state => state.auth)
    return(
        <nav className='header'>
            <div className="header-left">
                <img src={logo} alt='logo' />
                <div className='header-input'>
                    <SearchIcon/>
                    <input type='text' placeholder=' Search Facebook' ></input>
                </div>
            </div>
            <div className="header-middle">
                <div className='icons icon-home'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='icons'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='icons'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='icons'>
                    <StorefrontIcon fontSize='large'/>
                </div>
                <div className='icons'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
            </div>
            <div className="header-right">
                <div className='header-info'>
                    <Avatar src={currentUser.photoURL}/>
                    <h4>{currentUser.displayName} </h4>
                    
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                <ExpandMoreIcon />
                </IconButton>
            </div>
        </nav>
    )
}
export default Header
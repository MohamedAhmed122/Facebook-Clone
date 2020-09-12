import React, { Fragment } from 'react';
import person from '../../assets/person.png'
import './Styles.css'
import SidebarRow from './SidebarRow/SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Sidebar =()=>{
    return(
        <Fragment>
            <SidebarRow src={person} title='Mohamed Desouky' />
            <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 Information'  />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'  />
            <SidebarRow Icon={PeopleIcon} title='Friends'  />
            <SidebarRow  Icon={ChatIcon} title='Messenger' />
            <SidebarRow   Icon={StorefrontIcon} title='MarketPlace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'  />
            <SidebarRow  Icon={ExpandMoreIcon} title='MarketPlace'/>
        </Fragment>
    )
}
export default Sidebar;
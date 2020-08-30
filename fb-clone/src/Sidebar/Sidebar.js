import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://www.manunited.uk/wp-content/uploads/2016/12/man-united-fans.jpg" title='Valeriu Rusu'/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Iformation Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

        </div>
    )
}

export default Sidebar

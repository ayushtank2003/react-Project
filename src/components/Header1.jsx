import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../images/logo.png";
import React from 'react'
import '../StyleSheet/Header.css'
{/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */ }
const Header = () => {
  return (
    <div className='Header'>
      <div className="Header_left">
        <div className="left_logo">
          <img src= {logo} alt="Company logo" className='left_logoImage'/>
        </div>
        <div className="left_home">
          <HomeIcon />
          <h4>Home</h4>
        </div>
        <div className="left_notification">
          <NotificationsIcon />
          <h4>Notifications</h4>
        </div>
      </div>
      <div className="Header_center">
        <input type="text" placeholder=''/>
        <SearchIcon />

      </div>
      <div className="Header_right">
        <div className='right_user'>
          <Avatar src='' alter="User Profile"/>
        </div>
        <LanguageIcon/>
        <button>Add Questions</button>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import Logo from '../../assets/Yogurt.svg'
import { Container } from './styles'
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import SearchBar from '../SearchBar/searchBar';



const Header = () => {
  return (

    
    <Container>
      <div className="header">

        <a href="#home" id="linkLogo">
          <img src={Logo} alt="Logo Yogurt" className="logo" />
        </a>

        <nav className="nav">
          
            <SearchBar style="display:none" />
          <a href="#search" className="searchLink" id="searchBar">
          </a>
          <IconButton onclick="ShowSearch()">
            <SearchIcon fontSize="large" alt="search" className="SVG" id="searchSVG"></SearchIcon>
          </IconButton>

          <IconButton href="#link">
            <ForumIcon fontSize="large" alt="messages" className="SVG" id="messageSVG"></ForumIcon>
          </IconButton>

          <IconButton href="#link">
            <NotificationsActiveIcon fontSize="large" alt="notifications" className="SVG" id="notifySVG"></NotificationsActiveIcon>
          </IconButton>

          <IconButton href="#link">
            <AccountCircleSharpIcon fontSize="large" alt="profile" className="SVG" id="userSVG"></AccountCircleSharpIcon>
          </IconButton>

          <IconButton href="#link">
            <MoreHorizIcon fontSize="large" alt="more" className="SVG" id="moreSVG"></MoreHorizIcon>
          </IconButton>

        </nav>
      </div>
    </Container>
    
  )
}

export default Header
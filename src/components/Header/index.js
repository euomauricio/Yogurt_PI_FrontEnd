import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Logo from '../../assets/Yogurt.svg'
import {Container} from './styles'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


 const Header = () => {
  return (
    <Container>
      <div className="header">
          <a href="#home">
           <img src={Logo} alt="Logo Yogurt" className="logo"/>
         </a>
        <nav className="nav">
          <a href="#search" className="searchLink">
            <img src={AccessAlarmIcon} alt="search" className="SVG" id="searchSVG"/>
          </a>
          <a href="#messages" className="messageLink">
            <img src={ThreeDRotation} alt="messages" className="SVG" id="messageSVG"/>
          </a>
          <a href="#notifications" className="notifyLink">
            <img src={AccessAlarmIcon} alt="notifications" className="SVG" id="notifySVG"/>
          </a>
          <a href="#profile" className="userLink">
            <img src={AccessAlarmIcon} alt="profile" className="SVG" id="userSVG"/>
          </a>
          <a href="#more" className="moreLink">
            <img src={AccessAlarmIcon} alt="more" className="SVG" id="moreSVG"/>
          </a>
        </nav>
      </div>
    </Container>
  )
}
export default Header
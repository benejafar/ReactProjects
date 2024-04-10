import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/256/174/174857.png' alt=''/>

            <div className='header__search'>
                <SearchIcon/>
                <input type='text'/>
            </div>
        </div>
        <div className='header__right'>
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={PeopleIcon} title='My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={SmsIcon} title='Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title='Notifications'/>

          <HeaderOption avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQ-HkOk0nyWwdR6GNhI19KyuIDOyg-_w_tQ&s' title={'me'} />
        </div>

    </div>
  )
}

export default Header
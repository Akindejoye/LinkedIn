import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../headerOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" 
                    alt="Linkedin" 
                    />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                {/* <HeaderOption title="me" Icon={AccountCircleIcon} /> */}
                <HeaderOption 
                    avatar='https://image.shutterstock.com/image-vector/businessman-avatar-profile-picture-260nw-171438758.jpg'
                    title='me' 
                />
            </div>
        </div>
     );
}
 
export default Header;
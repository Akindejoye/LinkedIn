import './HeaderOption.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderOption = ({ avatar, Icon, title }) => {
    return ( 
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <img src={avatar} alt="" className="headerOption__icon" />} 
            <h3 className="headerOption__title">{title}</h3>
        </div>
     );
}
 
export default HeaderOption;
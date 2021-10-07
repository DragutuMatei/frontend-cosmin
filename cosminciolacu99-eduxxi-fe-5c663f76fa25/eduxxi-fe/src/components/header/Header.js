import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss'
import {NavLink} from "react-router-dom";
function Header() {
  return (
      <div className="header px-5">
        <NavLink to="/" className="cursor-pointer">
          <img src="/logo.svg" className="logo"/>
          </NavLink>
        
        <div className="searchBar mx-5">
          <IconButton
            aria-label="search"
          >
            <SearchIcon style={{fill: "#32373B"}}/>
          </IconButton>
          <input type="text" className=""/>
        </div>
        <NavLink to="/contact" className="cursor-pointer">Contact</NavLink>
      </div>
  );
}

export default Header;

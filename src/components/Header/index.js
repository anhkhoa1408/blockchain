import './Header.css';
import { Link } from 'react-router-dom';
import logo from './../../logo.png';

import '../../Fontawesome/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className="navbar">
            <img className="book-store-logo" src={logo} alt=""></img>

            <div className="navbar-item">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/AboutUs" className="nav-link">
                            ABOUT US
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/NFTBookLibrary" className="nav-link">
                            NFT BOOK LIBRARY
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/PublishBook" className="nav-link">
                            PUBLISH YOUR BOOK
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Blog" className="nav-link">
                            BLOG
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/MarketPlace" className="nav-link">
                            MARKET PLACE
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div className="search-section">
                <FontAwesomeIcon icon="search" />
                <input className="search-box"></input>
            </div>
        </div>
    );
}

export default Header;

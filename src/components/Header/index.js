import './index.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar">
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
                </ul>
            </div>
        </div>
    );
}

export default Header;

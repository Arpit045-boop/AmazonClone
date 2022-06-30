import React from 'react';
import { Link } from 'react-router-dom';
import "../Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingbasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateVal } from './Context/MyStateProvider';
import { auth } from './firebase';
function Header() {

    const [{ Mybasket, Newuser }] = useStateVal();

    // console.log("Mybasket is" , Mybasket);

    const Mylogin = () => {
        if (Newuser) {
            auth.signOut();
        }
    }
    return (
        <nav className='Navheader'>
            <Link to='/'>
                <img className='header_log' src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" alt="" />
            </Link>
            <div className="Nav_header_search">
                <input type='text'
                    className='Navheader_searchInput'
                />
                <SearchIcon className='my_header_searchicon' />
            </div>

            <div className='header_Nav'>
                <Link to={!Newuser && "/login"} className='header_link'>
                    <div onClick={Mylogin} className='nav_header_option'>
                        <span className="header_optionLine_One">Hello {Newuser?.email}</span>
                        <span className='header_optionLine_Two' >{Newuser ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/" className='header_link'>
                    <div className='nav_header_option'>
                        <span className="header_optionLine_One" >Returns</span>
                        <span className='header_optionLine_Two'>& Orders</span>
                    </div>
                </Link>
                <Link to="/" className='nav_header_link'>
                    <div className='nav_header_option'>
                        <span className="header_optionLine_One">Your</span>
                        <span className='header_optionLine_Two'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className='Nav_header_optionbasket'>
                        <ShoppingbasketIcon />
                        <span className='header_optionLine_Two header_basket_Count'>{Mybasket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
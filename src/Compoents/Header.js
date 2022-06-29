import React from 'react';
import { Link } from 'react-router-dom';
import "../Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingbasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateVal } from './Context/StateProvider';
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
        <nav className='header'>
            <Link to='/'>
                <img className='header_log' src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" alt="" />
            </Link>
            <div className="header_search">
                <input type='text'
                    className='header_searchInput'
                />
                <SearchIcon className='header_searchicon' />
            </div>

            <div className='header_nav'>
                <Link to={!Newuser && "/login"} className='header_link'>
                    <div onClick={Mylogin} className='header_option'>
                        <span className="header_optionLineOne">Hello {Newuser?.email}</span>
                        <span className='header_optionLineTwo' >{Newuser ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/" className='header_link'>
                    <div className='header_option'>
                        <span className="header_optionLineOne" >Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to="/" className='header_link'>
                    <div className='header_option'>
                        <span className="header_optionLineOne">Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className='header_optionbasket'>
                        <ShoppingbasketIcon />
                        <span className='header_optionLineTwo header_basketCount'>{Mybasket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
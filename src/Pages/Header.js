import React from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider';

function Header() {
  

const [{ basket }] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
            <img 
                className="header_logo" 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon_Logo"    
            />
            </Link>
            <div className="header_search" >
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav" >
            <Link to="/login" className="header_link" >
                <div className="header_option" >
                    <span className="header_optionLineOne">Hello</span>
                    <span className="header_optionLineTwo" >Sign In</span>
                </div>
            </Link>   
            <Link to="/" className="header_link" >
                <div className="header_option" >
                    <span className="header_optionLineOne" >Returns</span>
                    <span className="header_optionLineTwo" > & Orders</span>
                </div>
            </Link>   
            <Link  className="header_link" >
                <div href="https://www.amazon.in/ap/signin?_encoding=UTF8&openid.assoc_handle=inflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Famazon.in%2Fgp%2Fprime" className="header_option" >
                    <span className="header_optionLineOne" >Your</span>
                    <span className="header_optionLineTwo" >Prime</span>
                </div>
            </Link> 
            <Link to ="/checkout" className="header_link"  >
                <div class="header_optionBasket">
                    <ShoppingBasketIcon />
    <span className="header_optionLineTwo header_basketCount" >{basket?.length}</span>
                </div>
            </Link>   
            </div>
        </nav>
    )
}


export default Header

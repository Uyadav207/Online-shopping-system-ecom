import React from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../Context/StateProvider';
import shopcart from '../assets/shopcart.png';
import { auth } from '../firebase';


function Header() {

    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
        auth.signOut();
        }
    }
    
    return (
        <nav className="header">
            <Link to="/">
            <img 
                className="header_logo" 
                src={shopcart}
                alt="Amazon_Logo"    
            />
            </Link>
            <div className="header_search" >
                <input type="text" className="header_searchInput" />
                <FontAwesomeIcon icon={faSearch} className="header_searchIcon" />
            </div>
            <div className="header_nav" >
            <Link to={!user&&"/login"} className="header_link" >
                <div onClick={login} className="header_option" >
                    <span className="header_optionLineOne">Hello {user?.email}</span>
                    <span className="header_optionLineTwo" >{user ? 'sign out' : 'sign in'}</span>
                </div>
            </Link>   
            <Link to="/orders" className="header_link" >
                <div className="header_option" >
                    <span className="header_optionLineOne" >Returns</span>
                    <span className="header_optionLineTwo" > & Orders</span>
                </div>
            </Link>   
            <Link  className="header_link" >
                <div href="https://www.amazon.in/ap/signin?_encoding=UTF8&openid.assoc_handle=inflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Famazon.in%2Fgp%2Fprime" className="header_option" >
                    <span className="header_optionLineOne" >Subscribe</span>
                    <span className="header_optionLineTwo" >NetFlix</span>
                </div>
            </Link> 
            <Link to ="/checkout" className="header_link"  >
                <div class="header_optionBasket">
                <FontAwesomeIcon icon={faShoppingBasket} />
                    <span className="header_optionLineTwo header_basketCount" >{basket?.length}</span>
                </div>
            </Link>   
            </div>
        </nav>
    )
}


export default Header

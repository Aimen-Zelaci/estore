import React from 'react';
import  './Navbar.css';
import {Link} from 'react-router-dom';
import Utility from './context/Utility'
const Navbar = ()=>{

    const {cartCounter} = Utility();
    return(
        <nav className="site-header sticky-top py-1">
                     <div className="container d-flex flex-column flex-md-row justify-content-between">
                                <Link className="py-2" to="/">
                                    <svg i="https://www.dropbox.com/s/wwe8870bgswddz1/200x100logo_White_Transparent.png?raw=1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                                </Link>

                                <Link className="py-2 d-none d-md-inline-block" to="/">Home</Link>

                                <Link className="py-2 d-none d-md-inline-block" to="/default">Features</Link>

                                <Link className="py-2 d-none d-md-inline-block" to="/default">Enterprise</Link>

                                <Link className="py-2 d-none d-md-inline-block" to="/default">Support</Link>

                                <Link to="/Cart" className="notification btn btn-outline-success text-white bg-success d-flex align-items-center justify-content-center mt-2">
                                    <span className="badge mb-2">{cartCounter}</span>
                                    <i className="fa fa-shopping-cart  mt-2"></i>
                                </Link>
            </div>


</nav>
        )


}

export default Navbar;

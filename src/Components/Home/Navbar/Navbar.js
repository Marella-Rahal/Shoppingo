import { AddShoppingCart, Favorite, Home } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {Link , useNavigate} from 'react-router-dom';
import React, { useRef } from 'react';
import './Navbar.css';

function Navbar(props) {
    const route=useNavigate();
    const tabs=useRef()

    const show=()=>{
        const x=tabs.current;
        if(x.style.display=='none' )
            x.style.display='flex';
        else
            x.style.display='none';    
    }
// 
    return (
        <div className='navbar'>

            <div className='nav-toggle'>

                <h5 className='brand'>
                    Shoppingo
                </h5>

                <button type='button' className='toggle-btn' 
                onClick={show}>

                    <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" alt="toggle button"/>

                </button>

            </div>

            <div ref={tabs} className='tabs'>

                <IconButton className='nav-icons' onClick={()=>route('/')}>
                    <Home/>
                </IconButton>

                <Link to="/" className='nav-links'>
                    Home
                </Link>

                <Link to="/Shop" className='nav-links'>
                    Product
                </Link>

                <Link  to="/Mangment/Dashbord" className='nav-links'>
                    Managment
                </Link>

                <Link  to="/Offers" className='nav-links'>
                    Offers
                </Link>

                <IconButton className='nav-icons' onClick={()=>route('/Favourite')}>
                    <Favorite/>
                </IconButton>

                <IconButton className='nav-icons' onClick={()=>route('/ShoppingCard')}>
                    <AddShoppingCart/>
                </IconButton>


                <button type="button" className='log-btn' onClick={()=>route('/LogIn')}>
                    Log In
                </button>

                <button type="button" className='sign-btn' onClick={()=>route('/SignUp')}>
                    Sign Up
                </button>

            </div>

        </div>
    );
}

export default Navbar;
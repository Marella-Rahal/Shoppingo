import { ArrowDropDown, Home, LocalOffer, LogoutOutlined, Store, WorkOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useRef } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './SideNavbar.css';


function SideNavbar(props) {
    
    const route=useNavigate();
    const tabs=useRef();

    const show=()=>{
        const x=tabs.current;
        const y=tabs.sideNavbar;
        if(x.style.display=='none'){
            x.style.display='flex';
        }
        else{
            x.style.display='none';
        }
    }

    
    return (
        <div className='side-navbar'>

            <div className='side-navbar-toggle' style={{marginTop:'20px'}}>

                <div className='sbrand'>
                    <h5>
                        Shoppingo
                    </h5>
                </div>

                <button type='button' className='side-navbar-toggle-btn' 
                    onClick={show}>

                        <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" alt="toggle button"/>

                </button>

            </div>

            <div ref={tabs} className='side-navbar-tabs'>

                <div>
                    <IconButton className='nav-icons' onClick={()=>{route('/')}}>
                        <Home/>
                    </IconButton>
                    <Link to="/" className='nav-links'>Home</Link>
                </div>

                <div>
                    <IconButton className='nav-icons' onClick={()=>{route('/Offers')}}>
                        <LocalOffer/>
                    </IconButton>
                    <Link to='/Offers' className='nav-links'>Offers</Link>
                </div>

                <div className='side-navbar-mangment' >

                    <IconButton className='nav-icons'>
                        <WorkOutline/>
                    </IconButton>

                    <Link to="#" className='nav-links'>Mangment</Link>

                    <ArrowDropDown className='nav-icons' />



                    <div className='side-navbar-menu'>
                        <Link to="#" className='side-navbar-links'>Dashbord</Link>
                        <Link to="#" className='side-navbar-links'>Payments</Link>
                        <Link to="#" className='side-navbar-links'>Payments Required</Link>
                        <Link to="/Mangment/InsertPayment" className='side-navbar-links'>Insert Payments</Link>
                        <Link to="#" className='side-navbar-links'>Insert Payments Required</Link>
                    </div>

                </div>

                <div>
                    <Store className='nav-icons' onClick={()=>{route('/Shop')}}/>
                    <Link to='/Shop' className='nav-links'>Store</Link>
                </div>

                <div className='log-out'>

                    <IconButton className='nav-icons'>
                        <LogoutOutlined/>
                    </IconButton>

                    <button type='button'>Log Out</button>

                </div>

            </div>

        </div>
    );
}

export default SideNavbar;
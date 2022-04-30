import { ArrowDropDown, Dashboard, Home, LocalOffer, LogoutOutlined, Store, WorkOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SideNavbar.css';


function SideNavbar(props) {

    const route = useNavigate();
    const tabs = useRef();

    const show = () => {
        const x = tabs.current;
        const y = tabs.sideNavbar;
        if (x.style.display == 'none') {
            x.style.display = 'flex';
        }
        else {
            x.style.display = 'none';
        }
    }


    return (
        <div className='side-navbar'>

            <div className='side-navbar-toggle' style={{ marginTop: '20px' }}>

                <div className='sbrand'>
                    <h5>
                        Shoppingo
                    </h5>
                </div>

                <button type='button' className='side-navbar-toggle-btn'
                    onClick={show}>

                    <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" alt="toggle button" />

                </button>

            </div>

            <div ref={tabs} className='side-navbar-tabs' >

                <div>
                    <IconButton className='nav-icons' onClick={() => { route('/') }} style={{marginBottom:'5px'}}>
                        <Home />
                    </IconButton>
                    <Link to="/" className='nav-links'>Home</Link>
                </div>

                <div>
                    <Store className='nav-icons' onClick={() => { route('/Shop') }} style={{marginBottom:'5px'}}/>
                    <Link to='/Shop' className='nav-links'>Store</Link>
                </div>

                <div>
                    <IconButton className='nav-icons' onClick={() => { route('/Offers') }} style={{marginBottom:'5px'}}>
                        <LocalOffer />
                    </IconButton>
                    <Link to='/Offers' className='nav-links'>Offers</Link>
                </div>

                <div className='side-navbar-mangment'  >

                    <IconButton className='nav-icons' style={{marginBottom:'5px'}}>
                        <WorkOutline />
                    </IconButton>

                    <Link to="#" className='nav-links'>Mangment</Link>

                    <ArrowDropDown className='nav-icons' />



                    <div className='side-navbar-menu' >
                        <Link to="/Mangment/Dashbord" className='side-navbar-links'>Dashbord</Link>
                        <Link to="/Mangment/Payments" className='side-navbar-links'>Payments</Link>

                        <Link to="/Mangment/RequiredPayments" className='side-navbar-links'>Required Payments</Link>

                        <Link to="/Mangment/InsertPayments" className='side-navbar-links'>Insert Payments</Link>

                        <Link to="/Mangment/InsertRequiredPayments" className='side-navbar-links'>Insert  Required Payments</Link>
                    </div>

                </div>

                <div>
                    <IconButton className='nav-icons' onClick={() => { route('/Mangment/SellerDashboard') }} style={{marginBottom:'5px'}}>
                        <Dashboard/>
                    </IconButton>
                    <Link to="/Mangment/SellerDashboard" className='nav-links'>Seller Dashboard</Link>
                </div>

                <div className='log-out' style={{ marginTop: "0px" }}>

                    <IconButton className='nav-icons' style={{marginBottom:'5px'}}>
                        <LogoutOutlined />
                    </IconButton>

                    <button type='button' >Log Out</button>

                </div>

            </div>

        </div>
    );
}

export default SideNavbar;
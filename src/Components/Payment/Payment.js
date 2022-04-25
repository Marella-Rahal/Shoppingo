import React from 'react';
import {Container,InnerContainer,TopNavbar,Content} from '../AddProduct/Home/AddProductCss.js';
import {HeaderImage} from '../Profile/ProfileInfoCss';
import SideNavbar from '../AddProduct/SideNavbar/SideNavbar';
import { useNavigate } from 'react-router';
import { IconButton } from '@mui/material';
import { AddShoppingCart, ArrowDropDown, Favorite } from '@mui/icons-material';
import { Link ,Route} from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { PaymentsContainer, PaymentsInfo, Paragraph,Button} from '../InsertPaymentPage/InsertPaymentcss';
import PaymentItem from './PaymentItem.js';

import IncomePopup from '../PopUp/IncomePopup';
import $ from 'jquery';



function Payment (props){
    const route=useNavigate();

    const handlePopup=(e)=>{
        e.preventDefault();
        $(".popupdiv").fadeTo(700,1);
        $(".fullscreen").fadeTo(700,1);
        $('body').css("overflow","hidden");
    }

    return(

        <Container>
            <IncomePopup title="Please Insert Your Income Value"/>
            <SideNavbar/>
            <InnerContainer>
                <TopNavbar style={{ justifyContent: 'end' }}>
                    <div
                    style={{
                    display: 'flex',
                    paddingTop: '10px',
                    paddingRight: '10px',
                    height: '100%',
                    }}
                    >
                        <Link to="/Favourite">
                        <IconButton onClick={() => { Route('/Favourite');}} style={{ color: '#6B7AA1' }}>
                            <Favorite />
                        </IconButton>
                        </Link>

                        <Link to="/ShoppingCard">
                        <IconButton onClick={() => { Route('/ShoppingCard');}} style={{ color: '#6B7AA1' }}>
                            <AddShoppingCart />
                        </IconButton>
                        </Link>

                        <div style={{ marginTop: "10px", fontSize: '15px' }}>
                        Hello,Hasan</div>

                        <HeaderImage onClick={() => { route('/Profile') }}></HeaderImage>

                    </div>

                </TopNavbar>

                <Content style={{ flexDirection: 'column' }} >

                    <PaymentsContainer>

                        <PaymentsInfo>

                            <Paragraph>Total income</Paragraph>
                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                            <Paragraph>335,000 S.P</Paragraph>
                            <button style={{background:"none",border:"none",color: "#11324D"}} onClick={handlePopup}>
                                <AddCircleOutlineIcon style={{ marginRight: "15px", fontSize: "xx-large" }}></AddCircleOutlineIcon>
                            </button>
                            </div>
                        </PaymentsInfo>

                        <PaymentsInfo style={{ margin: '0px 5%' }}>
                            <Paragraph>Balance</Paragraph>
                            <Paragraph>200,500 S.P</Paragraph>
                        
                        </PaymentsInfo>

                        <PaymentsInfo>
                            <Paragraph>
                            Total Payments
                            </Paragraph>
                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                            <Paragraph>134,500 S.P </Paragraph>
                            
                            <Link to='/Mangment/Dashbord' style={{ marginRight: "10px",textDecoration: "none" , color: "#6b7aa1" ,fontSize:"small"}}>View All<KeyboardDoubleArrowRightIcon style={{fontSize:"small"}}/></Link>
                            </div>
                        </PaymentsInfo>

                    </PaymentsContainer>

                    <h2 style={{ color: '#11324D', marginTop: '25px' }}>
                        All Payments
                    </h2>

                    <div className='filter-bar'>
                        Filter By
                        <div className='filter'>
                            Price  <ArrowDropDown />

                            <div className='menufilter'>
                                <button className='btn-filter' type='button'>Low To Hight</button>
                                <button className='btn-filter' type='button'>Hight To Low</button>
                            </div >
                        </div>

                        <div className='filter'>
                            date of Payment  <ArrowDropDown />
                            <div className='menufilter' style={{left:'40px'}}>
                                <button className='btn-filter' type='button'>Oldest To Newest</button>
                                <button className='btn-filter' type='button'>Newest To Oldest</button>
                            </div>
                        </div>

                        <div className='filter'>
                            payment type  <ArrowDropDown />
                            <div className='menufilter' style={{left:'40px'}}>
                                <button className='btn-filter' type='button'>Food</button>
                                <button className='btn-filter' type='button'>Clothes</button>
                                <button className='btn-filter' type='button'>School Cost</button>
                                <button className='btn-filter' type='button'>Transportation</button>
                                <button className='btn-filter' type='button'>Health insurance</button>
                                <button className='btn-filter' type='button'>Entertainment</button>
                            </div>
                        </div>

                        <button type='button' onClick={()=>{route('/Mangment/InsertRequiredPayments')}} className="btn-insert">Insert New Payment</button>

                    </div>

                    <hr style={{
                        width: '97%',
                        height: '2px', 
                        marginTop:'2px'
                    }}/>

                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',width:'97%'}}>

                        <PaymentItem/>
                        <PaymentItem/>
                        <PaymentItem/>
                        <PaymentItem/>
                        <PaymentItem/>
                        <PaymentItem/>
                        <PaymentItem/>

                    </div>

                </Content>

            </InnerContainer> 

        </Container>           


    );
}

export default Payment;
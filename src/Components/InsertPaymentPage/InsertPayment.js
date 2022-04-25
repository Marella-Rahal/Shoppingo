import React, { useState } from 'react';
import SideNavbar from '../AddProduct/SideNavbar/SideNavbar';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import {
  Container,
  TopNavbar,
  Content,
  Label,
  InnerContainer,
} from '../AddProduct/Home/AddProductCss';
import { HeaderImage } from '../Profile/ProfileInfoCss';
import { PaymentsContainer, PaymentsInfo, Paragraph, Input, InputContainer, Button, FormContainer } from './InsertPaymentcss';
import { IconButton } from '@mui/material';
import { Route, Link, useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import IncomePopup from '../PopUp/IncomePopup';
import $ from 'jquery';

function InsertP(props) {

  const route = useNavigate();

  const handlePopup=(e)=>{
    e.preventDefault();
    $(".popupdiv").fadeTo(700,1);
    $(".fullscreen").fadeTo(700,1);
    $('body').css("overflow","hidden");
  }

  return (
    <Container>
      <IncomePopup title="Please Insert Your Income Value"/>
      <SideNavbar />
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
              <IconButton
                onClick={() => {
                  Route('/Favourite');
                }}
                style={{ color: '#6B7AA1' }}
              >
                <Favorite />
              </IconButton>
            </Link>
            <Link to="/ShoppingCard">
              <IconButton
                onClick={() => {
                  Route('/ShoppingCard');
                }}
                style={{ color: '#6B7AA1' }}
              >
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
                <button style={{background:"none",border:"none",color: "#11324D"}}  onClick={handlePopup}>
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
              
              <Link to='/Mangment/Dashbord'style={{ marginRight: "10px",textDecoration: "none" , color: "#6b7aa1" ,fontSize:"small"}}>View All<KeyboardDoubleArrowRightIcon style={{fontSize:"small"}}/></Link>
              </div>


             
            </PaymentsInfo>

          </PaymentsContainer>

          <h2 style={{ color: '#11324D', marginTop: '25px' }}>
            Insert Payment
          </h2>
          <hr style={{
            border: '1px solid #11324D',
            width: '80%',
            height: '0px',
            left: '390px',
            marginTop:'0px'
          }}></hr>

          <form action="/action_page.php" method="get" id="form1">
            <FormContainer style={{
              display: "flex",
              marginTop: "20px"
            }}>
              <InputContainer style={{ alignItems: "end" }}>
                <InputContainer>
                  <Label>payment Name</Label>
                  <Input type="text" placeholder='Mashaoui'></Input>
                </InputContainer>
                <InputContainer>
                  <Label>payment Date</Label>
                  <Input type="date" style={{ fontSize: '25px', color: 'gray', padding: '10px' }}></Input>
                </InputContainer>
              </InputContainer>
              <InputContainer>

                <InputContainer>
                  <Label>payment Value</Label>
                  <Input type="number" placeholder='200000'></Input>
                </InputContainer>
                <InputContainer>
                    <Label>payment Type</Label>
                    <select
                    id="cars"
                    name="cars"
                    style={{
                      border:'none',
                      borderRadius:'10px',
                      width:'90%',
                      backgroundColor:'rgba(208,148,148,0.21)',
                      color: 'black',
                    }}
                    >
                      <option defaultValue="" disabled hidden>
                        Options
                      </option>
                      <option defaultValue="Food">Food</option>
                      <option defaultValue="Clothes">Clothes</option>
                      <option defaultValue="School Cost">School Cost</option>
                      <option defaultValue="Transportation">Transportation</option>
                      <option defaultValue="Health insurance">Health insurance</option>
                      <option defaultValue="Entertainment">Entertainment</option>
                      <option defaultValue="Others">Others</option>
                    </select>
                </InputContainer>
              </InputContainer>


            </FormContainer>
          </form>
          <Button type="submit" form="form1" value="Submit"> Insert Payment</Button>
        </Content>
      </InnerContainer>

    </Container >

  )
}
export default InsertP; 
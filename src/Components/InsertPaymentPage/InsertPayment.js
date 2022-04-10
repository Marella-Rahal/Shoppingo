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
import {PaymentsContainer,PaymentsInfo,Paragraph,Input,InputContainer,Button,FormContainer} from './InsertPaymentcss';
import { IconButton } from '@mui/material';
import { Route, Link ,useNavigate} from 'react-router-dom';


function InsertP(props) {
  const route=useNavigate();
    
    return (
<Container>
      <SideNavbar/>
      <InnerContainer>
        <TopNavbar style={{justifyContent: 'end'}}>
         
          <div
              style={{
                display: 'flex',
                paddingTop:'10px',
                paddingRight:'10px',
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
            <Link to="/ShoppingCart">
              <IconButton
                onClick={() => {
                  Route('/ShoppingCart');
                }}
                style={{ color: '#6B7AA1' }}
              >
                <AddShoppingCart />
              </IconButton>
            </Link>

            <div style={{ marginTop:'10px', fontSize: '15px'}}>
              Hello,Hasan
            </div>
            <HeaderImage onClick={()=>{route('/Profile')}}></HeaderImage>
          </div>
        </TopNavbar>

        <Content style={{flexDirection:'column'}} >
            <PaymentsContainer>
                <PaymentsInfo>
                    <Paragraph>Total income</Paragraph>
                    <Paragraph>335,000 S.P</Paragraph>
                </PaymentsInfo>
                <PaymentsInfo style ={{margin :'0px 5%'}}>
                    <Paragraph>Total income</Paragraph>
                    <Paragraph>335,000 S.P</Paragraph>
                </PaymentsInfo>

                <PaymentsInfo>
                    <Paragraph>Total income</Paragraph>
                    <Paragraph>335,000 S.P</Paragraph>
                </PaymentsInfo>

            </PaymentsContainer>

            <h2 style={{color: '#11324D',marginTop:'10px'}}>
            Insert Payment
            </h2>
            <hr style={{    border: '1px solid #11324D',
    width: '75%',
    height: '0px',
    left: '390px',
    top: '469px'}}></hr>

      <form action="/action_page.php" method="get" id="form1">
    <FormContainer style={{display:"flex" ,
 marginTop:"20px"}}>
    <InputContainer style={{alignItems: "end"}}>
    <InputContainer>
    <Label>payment Name</Label>
    <Input type="text"></Input>
    </InputContainer>
    <InputContainer>
    <Label>payment Date</Label>
    <Input type="date" style={{fontSize: '25px',color: 'gray',padding: '10px'}}></Input>




   
    </InputContainer>
    </InputContainer>
    <InputContainer>

    <InputContainer>
    <Label>payment Value</Label>
    <Input type="text"></Input>
    </InputContainer>
    <InputContainer>
    <Label>payment Type</Label>
    <Input type="text"></Input>
    </InputContainer>
    </InputContainer>

   
    </FormContainer>
    </form>
    <Button type="submit" form="form1" value="Submit"> Insert Payment</Button>
        </Content>
            </InnerContainer>
            
        </Container>

    )}
export default InsertP ; 
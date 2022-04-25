import React, { useState } from 'react';
import SideNavbar from '../AddProduct/SideNavbar/SideNavbar';
import { AddShoppingCart, Favorite} from '@mui/icons-material';
import {
  TopNavbar,
  Section,
  Label,
  InputText,
  DivSize,
} from '../AddProduct/Home/AddProductCss';
import { IconButton } from '@mui/material';
import { Route, Link,useNavigate } from 'react-router-dom';
import {
  Container,
  InnerContainer,
  Content,
  Title,
  Button1,
  Button,
  HeaderImage
} from './ProfileInfoCss';

function ProfileInfo(props) {
  const route=useNavigate();

  const [image, setImage] = useState(require('../../Images/Default.jpg'));
  const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
   }

  return (
    <Container>
      <SideNavbar />
      <InnerContainer>
        <TopNavbar>
          <div>
            <Title>Profile Information</Title>
          </div>
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

            <div style={{marginTop:'7px', fontSize: '15px' }}>
              Hello,Hasan
            </div>

          
            <HeaderImage onClick={()=>{route('/Profile')}}/>
            

          </div>
        </TopNavbar>
        <Content style={{ marginTop: '50px'  }}>
      

          <Section>
            <Label>Your Name</Label>
            <InputText type="text" style={{ marginBottom: '20px' }}></InputText>
            <Label> Your Email Address</Label>

            <InputText
              type="email"
              style={{ marginBottom: '20px' }}
            ></InputText>
            <Label> Your Password</Label>
            <DivSize>
              <InputText type="password"></InputText>
              <Button1>Edit</Button1>
            </DivSize>
            <div>
              <Button>Done</Button>
              <Button onClick={()=>{route('/AddProduct')}}>Add Product</Button>
            </div>
          </Section>

          <Section>
            <div
              style={{
                width: '100%',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'

              }}
            >
              <img
                src={image}
                alt="preview image"
                style={{ height: '200px', width: '200px', borderRadius: '50%'}}
              />
              
              <label for="img" className="btn btn-info" style={{marginTop:'10px',color:'#6b7aa1',background:'#f5cb59'}}>Change Photo</label>
              <input
                type="file"
                id="img"
                onChange={onImageChange}
                className="filetype"
                style={{ marginLeft: '10px',display:'none' }}
              />

              <Button style={{minHeight:'50px',width:'40%',marginTop:'100px'}} onClick={()=>{route('/UpgradeProfile')}}>Upgrade Your account to seller</Button>
             
            </div>
          </Section>

        </Content>
      </InnerContainer>
    </Container>
  );
}

export default ProfileInfo;

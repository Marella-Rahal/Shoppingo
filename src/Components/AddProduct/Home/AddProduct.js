import React, { useState } from 'react';
import SideNavbar from '../SideNavbar/SideNavbar';
import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Route ,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
  Container,
  InnerContainer,
  TopNavbar,
  Title,
  Content,
  Section,
  ProductName,
  Label,
  InputText,
  ProductPrice,
  RadioSection,
  InputRadio,
  Pargraph,
  InputNumber,
  PriceWithOffer,
  Label2,
  ProductImage,
  ProductSize,
  InputChek,
  DivSize,
  ProductType,
  ProductDescription,
  InnerDivSize,
  CheckboxDiv,
  ColorDiv,
  Button,
  DivButton,
  Button2,
} from './AddProductCss';

import {HeaderImage} from '../../Profile/ProfileInfoCss';

function AddProduct(props) {
  const route=useNavigate();

  const [file, setFile] = useState(require('../../../Images/Default.jpg'));
  const onFileChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setFile(URL.createObjectURL(event.target.files[0]));
      }
   }


  return (
    <Container>
      <SideNavbar />  
      <InnerContainer>
          <TopNavbar>
            <div>
              <Title>Add Product</Title>
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
              <HeaderImage onClick={()=>{route('/Profile')}}/>
            </div>
          </TopNavbar>

          <Content>
            <Section>
              <ProductName>
                <Label>Product Name</Label>
                <InputText type="text"></InputText>
              </ProductName>
              <ProductPrice>
                <Label>Product Price</Label>
                <RadioSection>
                  <InputRadio type="radio" name="radio"></InputRadio>
                  <Pargraph>Price</Pargraph>
                </RadioSection>
                <InputNumber type="number"></InputNumber>
                <RadioSection>
                  <InputRadio type="radio" name="radio"></InputRadio>
                  <Pargraph>Price With Offer</Pargraph>
                </RadioSection>
                <PriceWithOffer>
                  <div style={{ width: '50%' }}>
                    <Label2>Old</Label2>
                    <InputNumber type="number"></InputNumber>
                  </div>
                  <div style={{ width: '48%' }}>
                    <Label2>New</Label2>
                    <InputNumber type="number"></InputNumber>
                  </div>
                </PriceWithOffer>
              </ProductPrice>
              <ProductImage>

                <Label>Product Image</Label>
                <div>

                  <label for="file" className="btn btn-info" style={{marginTop:'10px',color:'#6b7aa1',background:'#f5cb59',width:'200px'}}>Choose Photo</label>
                  <input type="file" id="file" onChange={onFileChange} className="filetype" style={{ marginLeft: '10px',display:'none' }}
                  />

                  <img
                  src={file}
                  alt="preview image"
                  style={{ height: '150px', width: '150px',borderRadius:'20px',marginLeft:'20px'}}
                  />

                </div>
                
              </ProductImage>
            </Section>

            <Section>
              <ProductSize>
                <Label>Product Size</Label>
                <DivSize>
                  <InnerDivSize>
                    <CheckboxDiv>
                      <InputChek type="checkbox"></InputChek>
                      <Pargraph>S</Pargraph>
                    </CheckboxDiv>
                    <CheckboxDiv>
                      <InputChek type="checkbox"></InputChek>
                      <Pargraph>M</Pargraph>
                    </CheckboxDiv>
                  </InnerDivSize>
                  <InnerDivSize>
                    <CheckboxDiv>
                      <InputChek type="checkbox"></InputChek>
                      <Pargraph>L</Pargraph>
                    </CheckboxDiv>
                    <CheckboxDiv>
                      <InputChek type="checkbox"></InputChek>
                      <Pargraph>XL</Pargraph>
                    </CheckboxDiv>
                  </InnerDivSize>
                  <InnerDivSize>
                    <CheckboxDiv>
                      <InputChek type="checkbox"></InputChek>
                      <Pargraph>XXL</Pargraph>
                    </CheckboxDiv>
                    <CheckboxDiv>
                      <InputChek type="checkbox"></InputChek>
                      <Pargraph>XXXL</Pargraph>
                    </CheckboxDiv>
                  </InnerDivSize>
                </DivSize>
              </ProductSize>

              <ProductType>
                <Label>Product Type</Label>
                <DivSize>
                  <CheckboxDiv>
                    <InputChek type="checkbox" name="gender"></InputChek>
                    <Pargraph>Man</Pargraph>
                  </CheckboxDiv>
                  <CheckboxDiv>
                    <InputChek type="checkbox" name="gender"></InputChek>
                    <Pargraph>Woman</Pargraph>
                  </CheckboxDiv>
                  {/* <CheckboxDiv>
                    <InputChek type="checkbox" name="gender"></InputChek>
                    <Pargraph>Boy</Pargraph>
                  </CheckboxDiv> */}
                </DivSize>
              </ProductType>
              <ProductDescription>
                <Label>Product Description</Label>
                <select
                  id="cars"
                  name="cars"
                  style={{
                    width: '50%',
                    padding: '10px',
                    color: '#6b7aa1',
                  }}
                >
                  <option defaultValue="" disabled hidden>
                    Options
                  </option>
                  <option defaultValue="saab">Saab 95</option>
                  <option defaultValue="mercedes">Mercedes SLK</option>
                  <option defaultValue="audi">Audi TT</option>
                </select>
              </ProductDescription>

              <ProductDescription>
                <Label>Product color</Label>
                <ColorDiv>
                  <select
                    id="cars"
                    name="cars"
                    style={{
                      width: '50%',
                      padding: '10px',
                      color: '#6b7aa1',
                    }}
                  >
                    <option defaultValue="" disabled hidden>
                      Options
                    </option>
                    <option defaultValue="saab">Saab 95</option>
                    <option defaultValue="mercedes">Mercedes SLK</option>
                    <option defaultValue="audi">Audi TT</option>
                  </select>
                  <Button>Add More</Button>
                </ColorDiv>
              </ProductDescription>
              <DivButton>
                <Button2>Add Product</Button2>
              </DivButton>
            </Section>
          </Content>
          
      </InnerContainer>
    </Container>
  );
}
export default AddProduct;

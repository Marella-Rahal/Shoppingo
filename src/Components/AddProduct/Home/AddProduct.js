import React, { useState,useRef,useEffect} from 'react';
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
import $ from 'jquery';

function AddProduct(props) {


  const [manChecked,setmanChecked]=useState(true);
  const [womanChecked,setwomanChecked]=useState(false);
  const [Color,setColor]=useState('#ffffff');
  const route=useNavigate();



  const [file, setFile] = useState(require('../../../Images/Default.jpg'));
  const onFileChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setFile(URL.createObjectURL(event.target.files[0]));
      }
   }


  //todo control gender checkbox 

  const mantoggle=(e)=>{
      setmanChecked(true);
      setwomanChecked(false);
      $('#man').css('display','block');
      $('#woman').css('display','none');
  }

  const womantoggle=(e)=>{
      setmanChecked(false);
      setwomanChecked(true);
      $('#man').css('display','none');
      $('#woman').css('display','block');
  }


  //todo create product color

  const addColorFunc=()=>{
    var In=document.createElement("input");
    In.type='color';
    In.value=Color;
    In.name='productColor';
    In.style.border='none';
    In.style.width='30px';
    In.style.height='30px';
    $('#addColorDiv').append(In);
  };

  //todo delete product color

  const removeColorFunc=()=>{

      // console.log(document.getElementById('addColorDiv').children);

      if(document.getElementById('addColorDiv').children){
        document.getElementById('addColorDiv').lastElementChild.remove();
      }

      //console.log(document.getElementById('addColorDiv').children);
  };


  //todo ************************

  return (
    <Container>
      <SideNavbar />  
      <InnerContainer>
          <TopNavbar>
            <div>
              <Title>Add  Product</Title>
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
            <ProductType>
                <Label>Product Type</Label>
                <DivSize>
                  <CheckboxDiv>
                    <InputChek type="checkbox" name="gender" checked={manChecked} onClick={mantoggle}></InputChek>
                    <Pargraph>Man</Pargraph>
                  </CheckboxDiv>
                  <CheckboxDiv style={{marginRight:'100px'}}>
                    <InputChek type="checkbox" name="gender" checked={womanChecked} onClick={womantoggle}></InputChek>
                    <Pargraph>Woman</Pargraph>
                  </CheckboxDiv>
                </DivSize>
              </ProductType>
              <ProductDescription>
                <select
                  id="man"
                  name="man"
                  style={{
                    width: '64%',
                    padding: '10px',
                    color: '#6b7aa1',
                    borderRadius:'10px',
                    border:'none',
                    boxShadow:'10px 4px 4px rgba(0, 0, 0, 0.25) '
                  }}
                >
                  <option defaultValue="Blazer">Blazer</option>
                  <option defaultValue="Abayas">Abayas</option>
                  <option defaultValue="Hoodies">Hoodies</option>
                  <option defaultValue="Jackets">Jackets</option>
                  <option defaultValue="Pants">Pants</option>
                  <option defaultValue="Shirts">Shirts</option>
                  <option defaultValue="Sets">Sets</option>
                  <option defaultValue="Shorts">Shorts</option>
                  <option defaultValue="Suits">Suits</option>
                  <option defaultValue="T-Shirts">T-Shirts</option>
                  <option defaultValue="Swimwear">Swimwear</option>
                  <option defaultValue="Vests">Vests</option>
                  <option defaultValue="Pajamas">Pajamas</option>
                  <option defaultValue="Bow ties">Bow ties</option>
                  <option defaultValue="Hats">Hats</option>
                  <option defaultValue="Scarves">Scarves</option>
                  <option defaultValue="Ties">Ties</option>
                  <option defaultValue="Belts">Belts</option>
                  
                </select>

                <select
                  id="woman"
                  name="woman"
                  style={{
                    width: '64%',
                    padding: '10px',
                    color: '#6b7aa1',
                    borderRadius:'10px',
                    border:'none',
                    boxShadow:'10px 4px 4px rgba(0, 0, 0, 0.25) ',
                    display:'none'
                  }}
                >
                  <option defaultValue="Blazer">Blazer</option>
                  <option defaultValue="Abayas">Abayas</option>
                  <option defaultValue="Hoodies">Hoodies</option>
                  <option defaultValue="Jackets">Jackets</option>
                  <option defaultValue="Dresses">Dresses</option>
                  <option defaultValue="Shirts">Shirts</option>
                  <option defaultValue="Sets">Sets</option>
                  <option defaultValue="Shorts">Shorts</option>
                  <option defaultValue="Suits">Suits</option>
                  <option defaultValue="T-Shirts">T-Shirts</option>
                  <option defaultValue="Swimwear">Swimwear</option>
                  <option defaultValue="Vests">Vests</option>
                  <option defaultValue="Pajamas">Pajamas</option>
                  <option defaultValue="BodySuits">BodySuits</option>
                  <option defaultValue="Hats">Hats</option>
                  <option defaultValue="Scarves">Scarves</option>
                  <option defaultValue="Ties">Ties</option>
                  <option defaultValue="Belts">Belts</option>
                  <option defaultValue="Skirts">Skirts</option>
                  <option defaultValue="Jeans">Jeans</option>
                  
                </select>
              </ProductDescription>

              <ProductDescription>

                  <Label>Product color</Label>

                  <div style={{marginBottom:'15px'}}>

                    <Button type='button'  onClick={addColorFunc} style={{width:'30%',height:'50px',marginLeft:'0px'}}>Add Color</Button>

                    <Button type='button'  onClick={removeColorFunc} style={{width:'30%',height:'50px'}}>Remove Color</Button>

                  </div>

                  <div id='addColorDiv' style={{width:'65%'}}>
                        
                  </div>

              </ProductDescription>    

              <Label>Quantity</Label>
              <InputNumber type='number'/>

              <Label>Brand</Label>
              <InputText/>

              <Label>Number of Model</Label>
              <InputText/>


            </Section>

            <Section>

            <ProductDescription>
                <Label>Fabric Type</Label>
                <select
                  id="cars"
                  name="cars"
                  style={{
                    width: '65%',
                    padding: '10px',
                    color: '#6b7aa1',
                    borderRadius:'10px',
                    border:'none',
                    boxShadow:'10px 4px 4px rgba(0, 0, 0, 0.25) '
                  }}
                >
                  <option defaultValue="Cashmere">Cashmere</option>
                  <option defaultValue="Chenille">Chenille</option>
                  <option defaultValue="Cotton">Cotton</option>
                  <option defaultValue="Crêpe">Crêpe</option>
                  <option defaultValue="Georgette">Georgette</option>
                  <option defaultValue="Gingham">Gingham</option>
                  <option defaultValue="Leather">Leather</option>
                  <option defaultValue="Linen">Linen</option>
                  <option defaultValue="Organza">Organza</option>
                  <option defaultValue="Silk">Silk</option>
                  <option defaultValue="Velvet">Velvet</option>
                  <option defaultValue="Twill">Twill</option>
                  <option defaultValue="Damask">Damask</option>
                  <option defaultValue="naylon">naylon</option>
                  
                </select>
              </ProductDescription>

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

              <div style={{width:'100%',display:'flex',flexDirection:'column',marginBlock:'20px'}}>

                <Label>Product Price</Label>
                <InputNumber type="number"></InputNumber>

                <Label>Enter the percentage of the offer</Label>
                <InputNumber type="number"></InputNumber>
              
              </div>

              <ProductImage>

              <Label>Product Image</Label>
                  <div style={{width:'65%'}}>

                    <label for="file" className="btn btn-info" style={{marginTop:'10px',color:'#6b7aa1',background:'#f5cb59',padding:'1px',width:'35%'}}>Choose Photo</label>
                    <input type="file" id="file" onChange={onFileChange} className="filetype" style={{ marginLeft: '10px',display:'none' }}
                    />

                    <img
                    src={file}
                    alt="preview image"
                    style={{ height: '150px', width: '50%',borderRadius:'20px',marginLeft:'20px'}}
                    />

                  </div>

              </ProductImage>
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

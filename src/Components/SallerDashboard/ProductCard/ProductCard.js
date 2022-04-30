import React from 'react';
import j from '../../../Images/Jacket.webp';
import { Favorite, Star } from '@material-ui/icons';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export const SellerButton=styled.button`
background:#F4C444;
color:#11324D;
border:none;
border-radius:12px;
width:45%;    
&:hover{
    color:#F4C444;
    background:#11324D;
}
`


function ProductCard(props) {

    const route=useNavigate();

    return (
        <div className='card' style={{width:'200px' ,marginInline:'10px',marginBottom:'20px',paddingBottom:'20px',borderRadius:'20px',boxShadow:'5px 5px 5px 5px rgba(0,0,0,0.25)'}}>
            <img src={j} alt="product img" className="card-img-top" style={{borderRadius:'20px'}} onClick={()=>route('/ProductDetail')}/>

           

            <h4 className='text-center'  style={{color:'#0D065E'}}>Red winter Jacket</h4>

            <h5 className='text-center' style={{color:'#7D6A06'}}>30.000 sp</h5>

            <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
                <SellerButton> Delete </SellerButton>
                <SellerButton> Update </SellerButton>

            </div>
        </div>
            
    );
}

export default ProductCard;
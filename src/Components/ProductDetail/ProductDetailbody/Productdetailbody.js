import React,{useRef} from 'react';
import './Productdetailbody.css';
import Navbar from '../../Home/Navbar/Navbar';
import j from '../../../Images/Jacket.webp';
import { AddShoppingCart, ArrowForward } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Colors from './Colors/Colors';
import Sizes from './Sizes/Sizes';
import Details from './Details';
import Map from '../Map/Mapbody/Map';
import { useNavigate } from 'react-router';

function Productdetailbody(props) {
    const route=useNavigate();

    const description=useRef();
    const color=useRef();
    const size=useRef();
    const price_loc=useRef();
    // const add_product_display='block';
    const withOffer=true;

    return (
        <>
            <Navbar/>
            <div className='detail'>

                <div className='product-detail'>

                     {/* //todo: The Image And the Add button  */}

                    <div style={{margin:'20px',marginTop:'0px',color:'#0E1D51',fontWeight:'bold',display:'flex'}}>

                        <img src={j} alt="product img" style={{width:'60%',height:'100%',borderRadius:'30px'}}/>

                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                            <button type='button' className='add-shoppingcard'>Add to <AddShoppingCart/></button>

                            {/* <button type='button' onClick={()=>{route('/AddProduct')}} className='add-shoppingcard' style={{display:add_product_display}}>
                                Add Product
                            </button> */}
                        </div>

                    </div>

                    {/* //todo: Description and the Arrow button and the content */}

                    <Details name="Description" content={description}/>

                    <p ref={description} style={{color:'#6B7AA1',fontWeight:'bold',marginInline:'20px'}}>Winter Red Jacket</p>

                    {/* //todo: Colors and the Arrow button and the content   */}

                    <Details name="Colors" content={color}/>

                    <div ref={color} style={{marginInline:'20px'}}>
                        <Colors color="black" name="color" />
                        <Colors color="blue" name="color"/>
                        <Colors color="red" name="color"/>
                        <Colors color="pink" name="color"/>
                        <Colors color="Yellow" name="color"/>
                        <Colors color="brown" name="color"/>
                        <Colors color="green" name="color"/>
                        <Colors color="white" name="color"/>
                        <Colors color="grey" name="color"/>

                    </div>

                    {/* //todo: Sizes and the Arrow button and the content */}

                    <Details name="Sizes" content={size}/>

                    <div ref={size} style={{marginInline:'20px',color:'#0E1D51'}}> 
                        <Sizes size='S'/>
                        <Sizes size='M'/>
                        <Sizes size='L'/>
                        <Sizes size='XL'/>
                        <Sizes size='2XL'/>
                        <Sizes size='3XL'/>
                        <Sizes size='4XL'/>
                        <Sizes size='5XL'/>
                    </div>


                    {/* //todo: Price and Location and the Arrow button and the content */}

                    <Details name="Price and Location" content={price_loc}/>

                    <div ref={price_loc} style={{marginInline:'20px',color:'#6B7AA1',fontWeight:'bold'}}>

                        <h5>Thee Moon Shop</h5>

                        {withOffer?

                        <div style={{display:'flex',flexWrap:'wrap',maxWidth:'340px',height:'fit-content'}}>
                            <h6 style={{textDecoration:'line-through',color:'red',marginRight:'15px'}}>200.000 s.p</h6>
                            <h6>100.000 s.p</h6>
                        </div>:

                        <div style={{maxWidth:'340px',height:'fit-content'}}>200.000 s.p</div>}


                        <div style={{textAlign:'right',maxWidth:'340px',height:'fit-content'}}
                        >
                            شارع الحضارة بجانب مركز سيرياتيل
                       
                        </div>


                        <IconButton className='arrowforward'>
                            <ArrowForward/>
                        </IconButton>

                    </div>

                </div>

                <Map/>                 
                
            </div>

        </>
    );
}

export default Productdetailbody;


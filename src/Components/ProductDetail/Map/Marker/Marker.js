import React from 'react';
import './Marker.css';
import j from '../../../../Images/Jacket.webp';
import { AddShoppingCart } from '@material-ui/icons';

function Marker({color}) {

    var bcolor='blue';

    if(color){
        if (color=='o') { bcolor='orange' }
        if (color=='g') { bcolor='green' }
        if (color=='r') { bcolor='red' }
    }

    return (
        <div className='marker'>

            <button type='button' className='marker-btn' style={{backgroundColor:bcolor,borderColor:bcolor}}>

                <img src={j} alt="product image" className='marker-img'/> 
                
                <div className="marker-infowindow">

                    <span style={{color:'#8E7D45',fontWeight:'bolder',fontSize:'15px'}}>Store Name</span>
                    <h4>The Moon Shop</h4>

                    <span style={{color:'#8E7D45',fontWeight:'bolder',fontSize:'15px'}}>Price</span>
                    <div>
                        {color=='r'?<div><h6 style={{color:'red',textDecoration:'line-through'}}>2.000.000 s.p</h6><h5>1.000.000 s.p</h5></div>:<h5>1.000.000 s.p</h5>}
                    </div>

                    {/* <button type='button' className='add-shoppingcard'>Add to <AddShoppingCart/></button> */}

                </div>

            </button>

        </div>
    );
}

export default Marker;
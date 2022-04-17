import React from 'react';
import './Marker.css';
import j from '../../../../Images/Jacket.webp';

function Marker({color}) {

    return (

            <button type='button' className='marker-btn' style={{backgroundColor:color,borderColor:color}}>

                <img src={j} alt="product image" className='marker-img'/> 

            </button>
    );
}

export default Marker;
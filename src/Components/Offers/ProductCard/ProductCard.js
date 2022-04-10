import React from 'react';
import './ProductCard.css';
import j from '../../../Images/Jacket.webp';
import { Favorite, Star } from '@material-ui/icons';
import { useNavigate } from 'react-router';

function ProductCard(props) {

    const route=useNavigate();

    return (
        <div className='card' style={{width:'200px' ,marginInline:'20px',marginBottom:'20px',paddingBottom:'20px'}}>
            <img src={j} alt="product img" className="card-img-top" onClick={()=>route('/ProductDetail')} />

            <button className='card-img-overlay heart-btn-offers'>
            <Favorite/>
            </button>  

            <h4 className='text-center'  style={{color:'#0D065E'}}>Red winter Jacket</h4>

            <h5 className='text-center' style={{color:'red',textDecoration:'line-through'}}>old : 40.000 sp</h5>

            <h5 className='text-center' style={{color:'#7D6A06'}}>new : 30.000 sp</h5>

            <div style={{textAlign:'center'}}>
                <Star id="star1" className='star-btn-offers'/>
                <Star id="star2" className='star-btn-offers'/>
                <Star id="star3" className='star-btn-offers'/>
                <Star id="star4" className='star-btn-offers'/>
                <Star id="star5" className='star-btn-offers'/>
            </div>

        </div>
            
    );
}

export default ProductCard;
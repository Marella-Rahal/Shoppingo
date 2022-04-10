import React from 'react';
import './Oneitem.css';
import j from '../../../Images/Jacket.webp';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { HighlightOff } from '@material-ui/icons';

function Oneitem(props) {
    return (
        <div className='div-container'>
            <div className='oneitem'>

                <div className='items-padding'>
                    <h5>Photo</h5>
                    <img src={j} alt="Product img" style={{width:'100px',height:'100px'}}/>
                </div>

                <div className='items-padding'>
                    <h5>Location</h5>
                    <div className='location'>
                        <span className='store-name'>The Moon Shop
                        </span><br/>
                        <Link to="/ProductDetail" className='view-map'>view on map</Link>
                    </div>
                </div>

                <div className="items-padding">
                    <h5>Color</h5>
                    <div style={{width:'40px',height:'40px',border:'solid 1px black',backgroundColor:'red',marginTop:'35px'}}/>
                </div>

                <div className='items-padding'>
                    <h5>Size</h5>
                    <div className='size'>M</div>
                </div>

                <div className='items-padding'>
                    <h5>Quantity</h5>
                    <button type="button" className='dec-btn'>-</button>

                    <p className="quantity-counter">1</p>

                    <button type="button" className='inc-btn'>+</button>
                </div>

                <div className='items-padding'>
                    <h5>Price</h5>
                    <div className='price'>
                        10.000 s.p
                    </div>
                </div>

                <div className='items-padding'>
                    <h5>Remove</h5>
                    <IconButton>
                        <HighlightOff style={{fontSize:'45px',marginTop: '25px'}}/>
                    </IconButton> 
                </div>

            </div>
            <hr className='hr' style={{border:'solid 1.5px'}}/>
        </div>  
    );
}

export default Oneitem;
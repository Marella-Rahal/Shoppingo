import React  from 'react';
import './Shoppingcardbody.css';
import Navbar from '../../../Components/Home/Navbar/Navbar';
import Removebutton from '../RemoveButton/Removebutton';
import Oneitem from '../OneItem/Oneitem.js';
import { useNavigate } from 'react-router';

function Shoppingcardbody(props) {
    const route=useNavigate();

    return (
        <div className='back-shoppingcard'>

            <Navbar/> 

            <h1 style={{textAlign:'center' , color:'#0E1D51',paddingBlock:'30px'}}> My Shopping Card</h1>

            <Removebutton/>

            <div className='main-line'>
                <h5>Photo</h5>
                <h5 style={{marginLeft:'57px'}}>Location</h5>
                <h5>Color</h5>
                <h5 style={{marginRight:'25px'}}>Size</h5>
                <h5 style={{marginRight:'20px'}}>Quantity</h5>
                <h5 style={{marginLeft:'25px'}}>Price</h5>
                <h5>Remove</h5>
            </div>

            <div className='items'>
                
                <Oneitem/>
                <Oneitem/>

            </div>

            <div className='total'>
                Total&nbsp;&nbsp;&nbsp;100.000 s.p
            </div>

            <div className='con-btn'>

                <button type="button" className='continue-confirm-btn'>
                    Confirm Payment
                </button>

                <button onClick={()=>{route('/Shop')}} type="button" className='continue-confirm-btn'>
                    Continue Shopping
                </button>

            </div>
            
        </div>  
    );
}

export default Shoppingcardbody;
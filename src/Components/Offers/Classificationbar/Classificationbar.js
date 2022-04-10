
import React from 'react';
import './Classificationbar.css';

function Classificationbar(props) {
    return (
        <div className='classificationbar-offers'>

            <button type="button">your gender</button>

            <div className='form-check' style={{paddingLeft:'35px'}}>
                <input className='form-check-input' type="checkbox" value="man"/>
                <label className='form-check-label' >man</label>
            </div>
            
            <div className='form-check' style={{paddingLeft:'35px'}}>           
                <input className="form-check-input" type="checkbox" value="woman"/>
                <label className='form-check-label' >woman</label>
            </div>


            <button type="button">category</button>

            <div className='form-check' style={{paddingLeft:'35px'}}>           
                <input className="form-check-input" type="checkbox" value="Accessories"/>
                <label className='form-check-label' style={{color:'#7D6A06',fontWeight:'bolder'}}>Accessories</label>
            </div>


            <div className='form-check' style={{paddingLeft:'60px'}}>
                <input className='form-check-input' type="checkbox" value="Belts"/>
                <label className='form-check-label' >Belts</label>
            </div>


            <div className='form-check' style={   {paddingLeft:'60px'}}>
                <input className='form-check-input' type="checkbox" value="Ties"/>
                <label className='form-check-label' >Ties</label>
            </div>


            <div className='form-check' style={{paddingLeft:'35px'}}>
                <input className='form-check-input' type="checkbox" value="Clothes"/>
                <label className='form-check-label' style={{color:'#7D6A06',fontWeight:'bolder'}}>Clothes</label>
            </div>


            <div className='form-check' style={  {paddingLeft:'60px'}}>
                <input className='form-check-input' type="checkbox" value="Jackets"/>
                <label className='form-check-label' >Jackets</label>
            </div>


            <div className='form-check' style={{paddingLeft:'60px'}}>
                <input className='form-check-input' type="checkbox" value="Jackets"/>
                <label className='form-check-label' >T_shirt</label>
            </div>


            <div className='form-check' style={{paddingLeft:'60px'}}>
                <input className='form-check-input' type="checkbox" value="Jackets"/>
                <label className='form-check-label' >Shorts</label>
            </div>


            <div className='form-check' style={{paddingLeft:'60px'}}>
                <input className='form-check-input' type="checkbox" value="Jackets"/>
                <label className='form-check-label' >dresses</label>
            </div>

        </div>
    );
}

export default Classificationbar;
import React,{useState}  from 'react';
import './Classificationbar.css';
import InputItem from './InputItem';
import $ from 'jquery';

function Classificationbar(props) {

    const [manChecked,setmanChecked]=useState(true);
    const [womanChecked,setwomanChecked]=useState(false);


    const mantoggle=(e)=>{
        setmanChecked(true);
        setwomanChecked(false);
        $('#Sman').css('display','block');
        $('#Swoman').css('display','none');
        $('.product').css('marginTop','-750px')
        $('.back').css('minHeight','140vh')
    }
  
    const womantoggle=(e)=>{
        setmanChecked(false);
        setwomanChecked(true);
        $('#Sman').css('display','none');
        $('#Swoman').css('display','block');
        $('.product').css('marginTop','-850px');
        $('.back').css('minHeight','155vh');
    }


    return (
        <div className='classificationbar'>

            {/* //todo gender */}

            <button type="button">your gender</button>

            <div className='form-check' style={{paddingLeft:'50px'}}>
                <input className='form-check-input' type="checkbox" id="man" name="man" value="man" checked={manChecked} onClick={mantoggle}/>
                <label className='form-check-label' for="man">man</label>
            </div>
            
            <div className='form-check' style={{paddingLeft:'50px'}}>           
                <input className="form-check-input" type="checkbox" id="woman" name="woman" value="woman" checked={womanChecked} onClick={womantoggle}/>
                <label className='form-check-label' for="woman">woman</label>
            </div>

            {/* //todo category */}

            <button type="button">category</button>

            <div id="Sman" style={{margin:'0px'}}>

            <InputItem main='Blazer' />
            <InputItem main='Abayas' />
            <InputItem main='Hoodies' />
            <InputItem main='Jackets' />
            <InputItem main='Pants' />
            <InputItem main='Shirts' />
            <InputItem main='Sets' />
            <InputItem main='Shorts' />
            <InputItem main='Suits' />
            <InputItem main='T-Shirts' />
            <InputItem main='Swimwear' />
            <InputItem main='Vests' />
            <InputItem main='Pajamas' />
            <InputItem main='Bow ties' />
            <InputItem main='Hats' />
            <InputItem main='Scarves' />
            <InputItem main='Ties' />
            <InputItem main='Belts' />

            </div>

            <div id="Swoman" style={{margin:'0px',display:'none'}}>

                <InputItem main='Blazer' />
                <InputItem main='Abayas' />
                <InputItem main='Hoodies' />
                <InputItem main='Jackets' />
                <InputItem main='Dresses' />
                <InputItem main='Shirts' />
                <InputItem main='Sets' />
                <InputItem main='Shorts' />
                <InputItem main='Suits' />
                <InputItem main='T-Shirts' />
                <InputItem main='Swimwear' />
                <InputItem main='Vests' />
                <InputItem main='Pajamas' />
                <InputItem main='BodySuits' />
                <InputItem main='Bow ties' />
                <InputItem main='Hats' />
                <InputItem main='Scarves' />
                <InputItem main='Ties' />
                <InputItem main='Belts' />
                <InputItem main='Skirts' />
                <InputItem main='Jeans' />

            </div>
        </div>    
    );
}

export default Classificationbar;
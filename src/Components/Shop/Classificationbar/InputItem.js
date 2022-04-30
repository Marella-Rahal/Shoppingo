import React from 'react';

function InputItem({main,check}) {

    return (
        <>
            <div className='form-check' style={{paddingLeft:'50px'}}>
                <input className='form-check-input' type="checkbox" id={main}  name={main} value={main}/>
                <label className='form-check-label' for={main}>{main}</label>
            </div>
        </>
    );
}

export default InputItem;
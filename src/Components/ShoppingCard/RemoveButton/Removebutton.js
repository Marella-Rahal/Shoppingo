import { Delete } from '@material-ui/icons';
import React from 'react';
import './Removebutton.css';

function Removebutton(props) {
    return (
        <div className='remove'>
            <button type='button' className='remove-btn'>
                <Delete/>
                Remove All
            </button>  
        </div>
    );
}

export default Removebutton;
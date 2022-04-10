import { Sort } from '@mui/icons-material';
import React from 'react';
import './Sortbutton.css';

function Sortbutton(props) {
    return (
        <div className='dropdown'>

            <button className='dropdown-btn'>
                Sort By&nbsp;&nbsp; 
                <Sort/>
            </button>

            <div className='dropdown-content'>

                <button type='button'>Price : Low To Hight</button>
                <button type='button'>Price : Hight To Low</button>

                <button type='button' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

                    from

                    <div>

                    <input type='number' placeholder='20000' style={{width:'160px'}} />
                    s.p
                    </div>

                    to

                    <div>
                    <input type='number' placeholder='50000' style={{width:'160px'}}/>
                    s.p
                    </div>

                    <button type='button' className='go-btn'>
                        Go
                    </button>

                </button>  

                <button type='button'>The Nearest Location</button>

            </div>
            
        </div>
    );
}

export default Sortbutton;
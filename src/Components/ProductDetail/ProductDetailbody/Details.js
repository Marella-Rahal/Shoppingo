import React from 'react';
import {ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function Details({name,content}){

    const handleDisplayDown=()=>{
        content.current.style.display="block";
    }

    const handleDisplayUp=()=>{
        content.current.style.display="none";
    }

    return(
        <div style={{margin:'7px 20px',color:'#0E1D51',fontWeight:'bold'}}>

            {name}

            <IconButton style={{float:'right',color:'#0E1D51'}} onClick={handleDisplayUp}>
                <ArrowCircleUp/>
            </IconButton>

            <IconButton style={{float:'right',color:'#0E1D51'}} onClick={handleDisplayDown}>
                <ArrowCircleDown/>
            </IconButton>

            <hr style={{marginTop:'0px',marginRight:'75px'}}/>    

        </div>
    );
}

export default Details;


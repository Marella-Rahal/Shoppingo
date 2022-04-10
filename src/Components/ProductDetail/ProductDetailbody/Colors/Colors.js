import React from 'react';
import styled from 'styled-components';

const InputRadio=styled.input.attrs({
     type:"radio",
     name:"color"
 })`
    width:25px;
    height:25px;
    margin-inline:2px;
    &::after{
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 15px;
        position: absolute;
        visibility: visible;
        background-color: ${props=> props.color};
    };
    &:checked::after{
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 15px;
        position: absolute;
        visibility: visible;
        border: solid 7px ${props=>props.color=='white'?'#0E1D51':'white'};
    }

`

function Colors(props) {


    return (
        <>
            <InputRadio color={props.color}/>
        </>
    );
}

export default Colors;
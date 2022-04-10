import styled from 'styled-components'
import LSbackground from '../../Images/SignUp2.jpg';
import {Facebook} from '@styled-icons/bootstrap/Facebook'
import {Google} from '@styled-icons/boxicons-logos/Google'




export const Container =styled.div`
display: flex;
height: 91vh;
flex-direction: row;
@media (max-width: 700px) {
  flex-direction: column;}
` 

export const Lsection = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 50%;
background-color:#FBF2D1;
flex-direction: column;
background-image: url(${LSbackground});
background-repeat:no-repeat;
background-size:100%;
background-position-y: center;
@media (max-width: 700px) {
  width:100%}

`
export const Rsection=styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
width: 50%;
margin: 20px 0;
@media (max-width: 700px) {
  width:100%}
`

export const Title = styled.h5 `
font-family: 'Cabin';
font-weight: 700;
font-size: 35px;
line-height: 61px;
color: #5E5A05;
padding: 75px;
padding-bottom: 15px;


`

export const Span = styled.span`
font-family: 'Cabin';
font-weight: 400;
font-size: 23px;
line-height: 43px;
color: #A58943;
padding: 75px;
padding-top: 0px;
`
export const Contain = styled.span `
font-family: 'Cabin';
font-style: normal;
font-weight: 600;
font-size: 37px;
line-height: 61px;
color: #6B7AA1;


`
export const ButtonS=styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 700px) {
  flex-direction: column;
}


`
export const Button1=styled.button`

height: 43px;
background: #FFFFFF;
border-radius: 48px;
display: flex;
justify-content: center;
align-items: center;
border : 1px solid #A58943;
margin-right : 10px;
@media (max-width: 700px ) {
  margin : 10px}

`
export const RedGoogle = styled(Google)`
  color: red;
  width: 41px;
`
export const Button1C=styled.div`

font-family: 'Cabin';
font-style: normal;
font-weight: 600;
font-size: 27px;
color: #886918;

`

export const Button2=styled.button`
height: 43px;
background: #FFFFFF;
border-radius: 48px;
display: flex;
justify-content: center;
align-items: center;
border : 1px solid #A58943;

`
export const BlueFacebook = styled(Facebook)`
  color:blue;
  width:30px;
`
export const Button2c=styled.div `

font-family: 'Cabin';
font-style: normal;
font-weight: 600;
font-size: 26px;
color: #886918;
`
export const Input = styled.input`
width: 80%;
height: 51px;
background: #FFFFFF;
border-radius: 27px;
border: 1px solid #886918;
margin: 5px;
padding-left:15px;
box-shadow: 0px 0px 3px #886918;

&::placeholder {
    font-family: "Cabin";
    font-style: normal;
    font-weight: 400;
  
    line-height: 29px;
    color: #6b7aa1;
  }

`

export const Input2 = styled.input`
width: 15%;
height: 35px;
background: #A58943;
border-radius: 10px;
margin: 15px;
border: none;

`
export const Form = styled.form`
width:100%;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
margin: 20px 0; 
`
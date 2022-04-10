import styled from 'styled-components'
import LSbackground from '../../Images/SignUp2.jpg';

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
align-items:flex-start;
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
font-size: 70px;
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

export const Content = styled.div`
width: 65%;
font-family: 'Cabin';
font-weight: 400;
font-size: 38px;
color: #6B7AA1;
padding: 35px;
`

export const Link = styled.a`
color: #A58943;
target="_blank";
font-size: 35px;
text-decoration:none;
`

export const Input = styled.input`
width: 100%;
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
width: 30%;
height: 35px;
background: #A58943;
border-radius: 10px;
margin: 15px;
border: none;
align-self: self-start;
font-family: 'Cabin';
color: #E7E0C9;
`

export const Form = styled.form`
width:80%;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
margin: 20px 0; 
`
export const FormContent = styled.div`
display: flex;
justify-content: space-between;
align-items:flex-start;
width:100%;
margin: 25px;
`
export const Link2= styled.a`
margin:15px;
font-family: 'Cabin';
font-weight: 400;
font-size: 24px;
line-height: 29px;
color: #11324D;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-decoration:none;
`
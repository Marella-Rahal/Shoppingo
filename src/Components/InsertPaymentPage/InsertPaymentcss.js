import styled from 'styled-components';

export const PaymentsContainer=styled.div`
display :flex;
height: 110px;
width:100%;
color: #11324D;
padding-right: 15px;
`

export const PaymentsInfo=styled.div`
background: rgba(244, 196, 68, 0.85);
border-radius: 35px;
display:flex;
flex-direction:column;
WIDTH: 30%;
JUSTIFY-CONTENT: end;
ALIGN-ITEMS: flex-start;



`
export const Paragraph=styled.p`
font-family: 'Sansation';
font-style: normal;
font-weight: 400;
font-size: 30px;
margin-left:15px;
line-height: 35px;
color: #11324D;
text-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);

`

export const Input=styled.input`
width: 90%;
height: 37.5px;
background: rgba(208,148,148,0.21);
border-radius: 10px;
border: none;
`
export const InputContainer=styled.div`
display:flex;
flex-direction: column;
width:65%;
@media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
}
    `
export const Button =styled.button`

background: #F5CB59;
border-radius: 10px;
WIDTH: 20%;
MARGIN: auto;
COLOR:#11324D;
BORDER:NONE;
`
export const FormContainer=styled.div`



 @media (max-width: 768px) {
flex-direction:column;  
 }
`

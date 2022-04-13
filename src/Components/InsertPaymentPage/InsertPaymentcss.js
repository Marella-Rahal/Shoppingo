import styled from 'styled-components';

export const PaymentsContainer = styled.div`
display :flex;
min-height: 110px;
width:100%;
color: #11324D;
padding-right: 15px;
@media (max-width: 910px) {
   flex-direction :column;

  }`

export const PaymentsInfo = styled.div`
background: rgba(244, 196, 68, 0.85);
border-radius: 35px;
display:flex;
flex-direction:column;
WIDTH: 30%;
JUSTIFY-CONTENT: start;
ALIGN-ITEMS: flex-start;
@media (max-width: 910px) {
    width:100%;
    margin: 15px 0px !important;
  }



`
export const Paragraph = styled.span`
font-family: 'Sansation';
font-style: normal;
font-weight: 400;
font-size: 30px;
margin-left:15px;
line-height: 50px;
color: #11324D;
// text-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);


`

export const Input = styled.input`
width: 90%;
height: 37.5px;
background: rgba(208,148,148,0.21);
border-radius: 10px;
border: none;
`
export const InputContainer = styled.div`
display:flex;
flex-direction: column;
width:65%;
@media (max-width: 910px) {
    align-items: flex-start;
    width: 100%;
}
`
export const Button = styled.button`

background: #F5CB59;
border-radius: 20px;
WIDTH: 20%;
height:50px;
margin-inline:auto;
margin-top:35px;
COLOR:#11324D;
BORDER:NONE;
&:hover{
  color:#F5CB59;
  background:#11324D;
}
`
export const FormContainer = styled.div`



 @media (max-width: 910px) {
    flex-direction:column;  
 }
`
